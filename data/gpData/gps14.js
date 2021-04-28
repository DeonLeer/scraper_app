const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 71,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 84,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 24,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 56,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 37,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 69,
  "time_alive": 638,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 27,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 88,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 4,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 43,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 78,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 79,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 82,
  "time_alive": 214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 14,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 94,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 86,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 32,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 64,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 88,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 29,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 13,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 48,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 91,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 72,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 97,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 97,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 1,
  "time_alive": 1506,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 82,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 90,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 96,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 16,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 57,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 22,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 95,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 34,
  "time_alive": 1318,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 76,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 54,
  "time_alive": 1172,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 86,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 20,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 79,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 36,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 26,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 35,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 74,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 86,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 86,
  "time_alive": 164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 60,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 41,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 7,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 87,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 63,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 92,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 64,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 73,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 88,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 28,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 19,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 85,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 33,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 61,
  "time_alive": 1003,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 49,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 60,
  "time_alive": 1146,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 61,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 52,
  "time_alive": 1129,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 70,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 23,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 47,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 88,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 66,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 55,
  "time_alive": 1056,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "57acfb7fd9e5479ba6a3de0624bb93e6",
  "placement": 27,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "57acfb7fd9e5479ba6a3de0624bb93e6",
  "placement": 53,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "57acfb7fd9e5479ba6a3de0624bb93e6",
  "placement": 63,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "57acfb7fd9e5479ba6a3de0624bb93e6",
  "placement": 55,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "57acfb7fd9e5479ba6a3de0624bb93e6",
  "placement": 53,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "57acfb7fd9e5479ba6a3de0624bb93e6",
  "placement": 69,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 38,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 89,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 59,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 47,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 41,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 93,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3883a6fce67c4a099f710bca1accc703",
  "placement": 74,
  "time_alive": 752,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3883a6fce67c4a099f710bca1accc703",
  "placement": 59,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3883a6fce67c4a099f710bca1accc703",
  "placement": 33,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3883a6fce67c4a099f710bca1accc703",
  "placement": 63,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3883a6fce67c4a099f710bca1accc703",
  "placement": 40,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3883a6fce67c4a099f710bca1accc703",
  "placement": 53,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 69,
  "time_alive": 929,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 82,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 57,
  "time_alive": 1136,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 69,
  "time_alive": 928,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 85,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 74,
  "time_alive": 337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 94,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 88,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 44,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 80,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 16,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 78,
  "time_alive": 301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 41,
  "time_alive": 1275,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 92,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 41,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 83,
  "time_alive": 361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 96,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 89,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 49,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 80,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 91,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 85,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 49,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 75,
  "time_alive": 327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 67,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 44,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 65,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 70,
  "time_alive": 802,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 92,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 73,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 57,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 40,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 53,
  "time_alive": 1185,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 71,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 72,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 94,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 52,
  "time_alive": 1188,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 54,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 40,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 51,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 68,
  "time_alive": 655,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 60,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 95,
  "time_alive": 144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 36,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 92,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 95,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 73,
  "time_alive": 585,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 80,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "2396c6f1f86f40a2a4ebb41bd6426a3d",
  "placement": 43,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "2396c6f1f86f40a2a4ebb41bd6426a3d",
  "placement": 87,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "2396c6f1f86f40a2a4ebb41bd6426a3d",
  "placement": 78,
  "time_alive": 371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "2396c6f1f86f40a2a4ebb41bd6426a3d",
  "placement": 45,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "2396c6f1f86f40a2a4ebb41bd6426a3d",
  "placement": 63,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 55,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 51,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 89,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 64,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 34,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 83,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 51,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 63,
  "time_alive": 979,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 81,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 26,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 90,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 42,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 54,
  "time_alive": 1184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 74,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 82,
  "time_alive": 324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 38,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 93,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 75,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 86,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 84,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 44,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 52,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 70,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 89,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 79,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 36,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 31,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 76,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 91,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 66,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 64,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 96,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 77,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 30,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "7d478e64974d401baf05832908e6cd6f",
  "placement": 99,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "7d478e64974d401baf05832908e6cd6f",
  "placement": 56,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "7d478e64974d401baf05832908e6cd6f",
  "placement": 25,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "7d478e64974d401baf05832908e6cd6f",
  "placement": 90,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "7d478e64974d401baf05832908e6cd6f",
  "placement": 87,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "7d478e64974d401baf05832908e6cd6f",
  "placement": 81,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 85,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 70,
  "time_alive": 841,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 70,
  "time_alive": 604,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 79,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 95,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 77,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "8744c25cf9ba420fb5b2725308823639",
  "placement": 30,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "8744c25cf9ba420fb5b2725308823639",
  "placement": 91,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "8744c25cf9ba420fb5b2725308823639",
  "placement": 76,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 71,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 90,
  "time_alive": 234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 95,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 49,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 68,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 46,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 77,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 62,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 82,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 89,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 56,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 82,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 55,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 77,
  "time_alive": 400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 68,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 59,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 43,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 72,
  "time_alive": 876,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 57,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 66,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 68,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 83,
  "time_alive": 306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 92,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 94,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 91,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 87,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 83,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 90,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 56,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 83,
  "time_alive": 359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 87,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 81,
  "time_alive": 451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 93,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 96,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 4,
  "time_alive": 1470,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 23,
  "time_alive": 1390,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 5,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 11,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 8,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 48,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 20,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 3,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 1,
  "time_alive": 1490,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 32,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 31,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 16,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 19,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 8,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 3,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 70,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 25,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 21,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 60,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 16,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 41,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 9,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 4,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 11,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 18,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 49,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 53,
  "time_alive": 1151,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 2,
  "time_alive": 1526,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 39,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 9,
  "time_alive": 1454,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 96,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 45,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 12,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 85,
  "time_alive": 661,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 6,
  "time_alive": 1491,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 3,
  "time_alive": 1493,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 14,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 82,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 71,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 3,
  "time_alive": 1518,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 2,
  "time_alive": 1512,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 2,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 66,
  "time_alive": 1057,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 47,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 27,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 20,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 31,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 33,
  "time_alive": 1360,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 14,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 24,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 43,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 35,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 10,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 9,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 27,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 20,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 68,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 23,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 24,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 80,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 11,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 57,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 19,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 10,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 6,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 17,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 24,
  "time_alive": 1389,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 36,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 17,
  "time_alive": 1433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 43,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 4,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 57,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 61,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 66,
  "time_alive": 945,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 5,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 1,
  "time_alive": 1524,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 26,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 36,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 20,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 32,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 3,
  "time_alive": 1520,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 27,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 43,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 5,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 15,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 58,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 7,
  "time_alive": 1486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 5,
  "time_alive": 1496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 66,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 99,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 64,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 97,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 1,
  "time_alive": 1526,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 19,
  "time_alive": 1437,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 69,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 15,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 76,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 19,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 25,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 9,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 20,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 37,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 19,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 27,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 96,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 77,
  "time_alive": 757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 1,
  "time_alive": 1512,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 1,
  "time_alive": 1487,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 46,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 92,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 13,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 70,
  "time_alive": 955,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 85,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 29,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 1,
  "time_alive": 1508,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 51,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 45,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 71,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 27,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 84,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 59,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 2,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 21,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 32,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 32,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 92,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 71,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 6,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 8,
  "time_alive": 1483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 62,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 5,
  "time_alive": 1466,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 23,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 29,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 75,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 15,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 12,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 30,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 10,
  "time_alive": 1426,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 63,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 14,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 49,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 50,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 40,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 48,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 33,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 9,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 50,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 16,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 23,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 12,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 10,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 40,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 44,
  "time_alive": 1204,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 57,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 59,
  "time_alive": 1077,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 69,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 4,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 65,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 51,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 68,
  "time_alive": 1026,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 8,
  "time_alive": 1460,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 22,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 5,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 11,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 87,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 34,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 86,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 24,
  "time_alive": 1378,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 21,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 29,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 74,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 17,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 72,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 30,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 53,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 54,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 10,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 36,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 39,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 81,
  "time_alive": 838,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 6,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 7,
  "time_alive": 1470,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 72,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 80,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 38,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 25,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 69,
  "time_alive": 956,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 38,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 35,
  "time_alive": 1322,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 22,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 57,
  "time_alive": 1090,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 46,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 51,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 52,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 47,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 15,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 14,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 62,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 12,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 88,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 42,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 11,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 33,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 16,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 68,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 8,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 58,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 66,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 44,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 67,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 52,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 34,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 26,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 47,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 13,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 28,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 40,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 4,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 64,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 59,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 88,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 11,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 7,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 42,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 97,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 64,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 82,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 73,
  "time_alive": 891,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 48,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 84,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 63,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 2,
  "time_alive": 1524,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 61,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 65,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 13,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 21,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 78,
  "time_alive": 817,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 86,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 52,
  "time_alive": 1130,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 59,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 50,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 49,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 14,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 48,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 47,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 43,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 81,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 16,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 67,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 18,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 68,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 21,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 17,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 63,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 90,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 78,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 22,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 41,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 96,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 17,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 6,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 55,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 93,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 44,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 90,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 77,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 40,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 7,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 96,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 61,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 79,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 59,
  "time_alive": 987,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 4,
  "time_alive": 1507,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 46,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 64,
  "time_alive": 948,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 8,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 62,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 61,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 56,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 21,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 56,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 3,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 34,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 30,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 88,
  "time_alive": 584,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 51,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 54,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 47,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 36,
  "time_alive": 1353,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 22,
  "time_alive": 1423,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 69,
  "time_alive": 961,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 85,
  "time_alive": 421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 87,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 53,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 2,
  "time_alive": 1508,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 69,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 86,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 92,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 71,
  "time_alive": 858,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 86,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 47,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 48,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 20,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 40,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 41,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 7,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 86,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 15,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 98,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 54,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 91,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 100,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 89,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 13,
  "time_alive": 1448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 12,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 41,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 65,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 55,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 9,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 87,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 75,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 33,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 58,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 93,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 75,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 93,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 16,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 88,
  "time_alive": 280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 15,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 49,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 32,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 10,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 53,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 82,
  "time_alive": 555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 67,
  "time_alive": 914,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 87,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 26,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 56,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 23,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 24,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 70,
  "time_alive": 881,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 27,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 83,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 23,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 61,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 30,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 37,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 32,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 39,
  "time_alive": 1350,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 26,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 89,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 72,
  "time_alive": 877,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 90,
  "time_alive": 278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 88,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 42,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 62,
  "time_alive": 970,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 29,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 42,
  "time_alive": 1318,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 35,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 54,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 31,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 83,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 76,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 38,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 25,
  "time_alive": 1380,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 56,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 93,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 44,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 57,
  "time_alive": 1126,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 14,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 60,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 74,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 28,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 50,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 38,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 63,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 46,
  "time_alive": 1253,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 34,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 88,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 25,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 34,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 81,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 50,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 70,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 18,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 86,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 39,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 45,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 74,
  "time_alive": 836,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 6,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 38,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 39,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 91,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 89,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 63,
  "time_alive": 983,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 89,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 44,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 85,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 24,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 56,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 28,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 63,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 60,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 46,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 60,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 13,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 51,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 72,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 73,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 67,
  "time_alive": 938,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 77,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 28,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 18,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 38,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 22,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 70,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 80,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 49,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 36,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 71,
  "time_alive": 936,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 70,
  "time_alive": 932,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 89,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 95,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 58,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 17,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 78,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 82,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 64,
  "time_alive": 951,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 65,
  "time_alive": 1000,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 83,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 7,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 75,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 80,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 33,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 54,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 26,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 19,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 13,
  "time_alive": 1415,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 57,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 72,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 93,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 52,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 76,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 52,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 25,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 35,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 31,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 91,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 79,
  "time_alive": 627,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 40,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 30,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 78,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 66,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 29,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 62,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 51,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 92,
  "time_alive": 468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 18,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 22,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 74,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 75,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 45,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 35,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 91,
  "time_alive": 672,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 33,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 80,
  "time_alive": 583,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 82,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 94,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 28,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 55,
  "time_alive": 1150,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 53,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 42,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 77,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 58,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 74,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 36,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 79,
  "time_alive": 662,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 29,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 26,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 77,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 68,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 28,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 60,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 78,
  "time_alive": 717,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 66,
  "time_alive": 1083,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 43,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 60,
  "time_alive": 984,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 59,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 65,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 55,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 68,
  "time_alive": 1032,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 98,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 99,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 18,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 69,
  "time_alive": 981,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 79,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 55,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 43,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 81,
  "time_alive": 752,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 44,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 49,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 94,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 41,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 31,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 48,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 76,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 77,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 95,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 67,
  "time_alive": 1050,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 37,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 41,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 67,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 89,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 83,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 37,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 98,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 100,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 61,
  "time_alive": 1110,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 53,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 64,
  "time_alive": 1093,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 74,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 95,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 46,
  "time_alive": 1176,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 75,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 83,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 42,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 84,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 96,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 30,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 90,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 73,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 31,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 87,
  "time_alive": 625,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 73,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 73,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 87,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 34,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 39,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 78,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 55,
  "time_alive": 1023,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 37,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 96,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 58,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 65,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 71,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 62,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 37,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 81,
  "time_alive": 539,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 97,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 95,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 90,
  "time_alive": 773,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 99,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 97,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 12,
  "time_alive": 1450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 35,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 56,
  "time_alive": 1193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 79,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 92,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 93,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 97,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 98,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 72,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 76,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 52,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 45,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 50,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 91,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 45,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 82,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 84,
  "time_alive": 459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 84,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 76,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 85,
  "time_alive": 794,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 81,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 94,
  "time_alive": 329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 94,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 91,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 97,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 80,
  "time_alive": 825,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 79,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 94,
  "time_alive": 161,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 95,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 85,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 54,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 100,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 83,
  "time_alive": 728,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cf29cf0-c199-41f3-a31d-38902da7dc1f",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 73,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a36568b-b6a9-4568-a6e5-e170efc1280f",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 92,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 90,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b72a1ab-1628-49c1-ac87-f989919f5ad5",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 99,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ea3ba9-aad8-4186-9957-482dfa613ee2",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 94,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04717565-06d4-492c-ab49-d45cfbd449d4",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 84,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 30,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 2,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 1,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 21,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 6,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 15,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 3,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 47,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 24,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 5,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 2,
  "time_alive": 1477,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 5,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 66,
  "time_alive": 861,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 25,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 43,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 9,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 2,
  "time_alive": 1484,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 35,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 98,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 20,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 7,
  "time_alive": 1471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 9,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 6,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 16,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 18,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 12,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 60,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 1,
  "time_alive": 1525,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 11,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 36,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 7,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 15,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 36,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 3,
  "time_alive": 1489,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 85,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 38,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 45,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 1,
  "time_alive": 1515,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 2,
  "time_alive": 1493,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 21,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 6,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 60,
  "time_alive": 1028,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 39,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 30,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 8,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 6,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 57,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 6,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 10,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 80,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 14,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 69,
  "time_alive": 859,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 84,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 3,
  "time_alive": 1497,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 15,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 2,
  "time_alive": 1517,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 5,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 95,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 34,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 17,
  "time_alive": 1441,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 22,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 7,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 13,
  "time_alive": 1423,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 95,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 4,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 1,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 48,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 2,
  "time_alive": 1525,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 43,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 62,
  "time_alive": 927,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 37,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 92,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 8,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 11,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 11,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 63,
  "time_alive": 1032,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 78,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 16,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 33,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 26,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 1,
  "time_alive": 1484,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 38,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 93,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 6,
  "time_alive": 1482,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 9,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 68,
  "time_alive": 728,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 95,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 64,
  "time_alive": 719,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 34,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 15,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 23,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 8,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 64,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 83,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 51,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 3,
  "time_alive": 1487,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 13,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 70,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 15,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 9,
  "time_alive": 1463,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 37,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 50,
  "time_alive": 1224,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 83,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 10,
  "time_alive": 1453,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 61,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 10,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 17,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 7,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 94,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 85,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 20,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 5,
  "time_alive": 1482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 46,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 44,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 22,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 22,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 12,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 19,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 71,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 4,
  "time_alive": 1483,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 9,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 14,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 52,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 44,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 3,
  "time_alive": 1520,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 41,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 49,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 28,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 96,
  "time_alive": 82,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 93,
  "time_alive": 183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 4,
  "time_alive": 1472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 100,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 77,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 2,
  "time_alive": 1515,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 1,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 35,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 93,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 7,
  "time_alive": 1443,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 81,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 18,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 5,
  "time_alive": 1479,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 65,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 14,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 50,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 29,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 6,
  "time_alive": 1444,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 27,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 39,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 36,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 51,
  "time_alive": 1217,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 30,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 78,
  "time_alive": 379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 86,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 24,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 8,
  "time_alive": 1428,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 29,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 38,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 28,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 55,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 42,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 67,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 9,
  "time_alive": 1438,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 83,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 16,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 16,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 95,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 41,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 32,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6",
  "placement": 74,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6",
  "placement": 94,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6",
  "placement": 9,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6",
  "placement": 36,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6",
  "placement": 13,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6",
  "placement": 8,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6",
  "placement": 35,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6",
  "placement": 73,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 15,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 21,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 12,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 52,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 14,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 38,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 60,
  "time_alive": 862,
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
    