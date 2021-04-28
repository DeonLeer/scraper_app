const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 6,
  "time_alive": 1392,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 37,
  "time_alive": 952,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 36,
  "time_alive": 906,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 41,
  "time_alive": 844,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 44,
  "time_alive": 698,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 36,
  "time_alive": 1100,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 36,
  "time_alive": 920,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 8,
  "time_alive": 1438,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 21,
  "time_alive": 1307,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 15,
  "time_alive": 1385,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 28,
  "time_alive": 1135,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 35,
  "time_alive": 1026,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 42,
  "time_alive": 791,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 45,
  "time_alive": 434,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 21,
  "time_alive": 1343,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 41,
  "time_alive": 817,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 48,
  "time_alive": 218,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 30,
  "time_alive": 1168,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 43,
  "time_alive": 409,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 21,
  "time_alive": 1376,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 35,
  "time_alive": 1024,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 47,
  "time_alive": 222,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 27,
  "time_alive": 1156,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 4,
  "time_alive": 1475,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:9c779da62855447890ab536c793f5b88",
  "placement": 15,
  "time_alive": 1327,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:9c779da62855447890ab536c793f5b88",
  "placement": 38,
  "time_alive": 873,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:9c779da62855447890ab536c793f5b88",
  "placement": 42,
  "time_alive": 727,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:9c779da62855447890ab536c793f5b88",
  "placement": 46,
  "time_alive": 227,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:9c779da62855447890ab536c793f5b88",
  "placement": 21,
  "time_alive": 1337,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:9c779da62855447890ab536c793f5b88",
  "placement": 25,
  "time_alive": 1230,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:9c779da62855447890ab536c793f5b88",
  "placement": 26,
  "time_alive": 1227,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:9c779da62855447890ab536c793f5b88",
  "placement": 48,
  "time_alive": 150,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 43,
  "time_alive": 793,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 32,
  "time_alive": 1159,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 40,
  "time_alive": 810,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 47,
  "time_alive": 143,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 11,
  "time_alive": 1398,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 30,
  "time_alive": 1144,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 45,
  "time_alive": 302,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 31,
  "time_alive": 1120,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "976a03d82f2d4f55996b4fffed0034d9:c732e7e2160847b493ca8b61e80c8652",
  "placement": 7,
  "time_alive": 1389,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "976a03d82f2d4f55996b4fffed0034d9:c732e7e2160847b493ca8b61e80c8652",
  "placement": 50,
  "time_alive": 164,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "976a03d82f2d4f55996b4fffed0034d9:c732e7e2160847b493ca8b61e80c8652",
  "placement": 34,
  "time_alive": 987,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "976a03d82f2d4f55996b4fffed0034d9:c732e7e2160847b493ca8b61e80c8652",
  "placement": 30,
  "time_alive": 1191,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "976a03d82f2d4f55996b4fffed0034d9:c732e7e2160847b493ca8b61e80c8652",
  "placement": 40,
  "time_alive": 816,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "976a03d82f2d4f55996b4fffed0034d9:c732e7e2160847b493ca8b61e80c8652",
  "placement": 49,
  "time_alive": 117,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "976a03d82f2d4f55996b4fffed0034d9:c732e7e2160847b493ca8b61e80c8652",
  "placement": 33,
  "time_alive": 949,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "976a03d82f2d4f55996b4fffed0034d9:c732e7e2160847b493ca8b61e80c8652",
  "placement": 46,
  "time_alive": 402,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "015572b588c94bc297dd44503cc0c755:0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 26,
  "time_alive": 1132,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "015572b588c94bc297dd44503cc0c755:0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 34,
  "time_alive": 1060,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "015572b588c94bc297dd44503cc0c755:0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 48,
  "time_alive": 215,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "015572b588c94bc297dd44503cc0c755:0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 40,
  "time_alive": 865,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "015572b588c94bc297dd44503cc0c755:0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 32,
  "time_alive": 1149,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "015572b588c94bc297dd44503cc0c755:0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 23,
  "time_alive": 1290,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "015572b588c94bc297dd44503cc0c755:0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 50,
  "time_alive": 140,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "015572b588c94bc297dd44503cc0c755:0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 12,
  "time_alive": 1405,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:4cb5dc300726422b87ed00f24e0a27dc",
  "placement": 45,
  "time_alive": 723,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:4cb5dc300726422b87ed00f24e0a27dc",
  "placement": 5,
  "time_alive": 1468,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:4cb5dc300726422b87ed00f24e0a27dc",
  "placement": 30,
  "time_alive": 1126,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:4cb5dc300726422b87ed00f24e0a27dc",
  "placement": 38,
  "time_alive": 962,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:4cb5dc300726422b87ed00f24e0a27dc",
  "placement": 41,
  "time_alive": 801,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:4cb5dc300726422b87ed00f24e0a27dc",
  "placement": 50,
  "time_alive": 103,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:4cb5dc300726422b87ed00f24e0a27dc",
  "placement": 48,
  "time_alive": 250,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:4cb5dc300726422b87ed00f24e0a27dc",
  "placement": 47,
  "time_alive": 391,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "00305d46885743f4b3bae606acb1af38:91fc3dc6d497443996cf3d6c447db25f",
  "placement": 30,
  "time_alive": 1073,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "00305d46885743f4b3bae606acb1af38:91fc3dc6d497443996cf3d6c447db25f",
  "placement": 29,
  "time_alive": 1175,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "00305d46885743f4b3bae606acb1af38:91fc3dc6d497443996cf3d6c447db25f",
  "placement": 44,
  "time_alive": 320,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "00305d46885743f4b3bae606acb1af38:91fc3dc6d497443996cf3d6c447db25f",
  "placement": 15,
  "time_alive": 1398,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "00305d46885743f4b3bae606acb1af38:91fc3dc6d497443996cf3d6c447db25f",
  "placement": 39,
  "time_alive": 822,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "00305d46885743f4b3bae606acb1af38:91fc3dc6d497443996cf3d6c447db25f",
  "placement": 46,
  "time_alive": 287,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "00305d46885743f4b3bae606acb1af38:91fc3dc6d497443996cf3d6c447db25f",
  "placement": 32,
  "time_alive": 963,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "00305d46885743f4b3bae606acb1af38:91fc3dc6d497443996cf3d6c447db25f",
  "placement": 35,
  "time_alive": 957,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 49,
  "time_alive": 180,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 19,
  "time_alive": 1349,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 50,
  "time_alive": 111,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 50,
  "time_alive": 128,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 49,
  "time_alive": 212,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 39,
  "time_alive": 730,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 22,
  "time_alive": 1341,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 18,
  "time_alive": 1357,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "d0c57ea49bd64838966a616d43e8422b:db1756e9d5cf422ea0b8897a6b0b9311",
  "placement": 29,
  "time_alive": 1074,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "d0c57ea49bd64838966a616d43e8422b:db1756e9d5cf422ea0b8897a6b0b9311",
  "placement": 14,
  "time_alive": 1399,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "d0c57ea49bd64838966a616d43e8422b:db1756e9d5cf422ea0b8897a6b0b9311",
  "placement": 41,
  "time_alive": 796,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "d0c57ea49bd64838966a616d43e8422b:db1756e9d5cf422ea0b8897a6b0b9311",
  "placement": 45,
  "time_alive": 297,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "d0c57ea49bd64838966a616d43e8422b:db1756e9d5cf422ea0b8897a6b0b9311",
  "placement": 34,
  "time_alive": 1101,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "d0c57ea49bd64838966a616d43e8422b:db1756e9d5cf422ea0b8897a6b0b9311",
  "placement": 27,
  "time_alive": 1152,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "d0c57ea49bd64838966a616d43e8422b:db1756e9d5cf422ea0b8897a6b0b9311",
  "placement": 44,
  "time_alive": 379,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "d0c57ea49bd64838966a616d43e8422b:db1756e9d5cf422ea0b8897a6b0b9311",
  "placement": 40,
  "time_alive": 828,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "2615728ed7a648a7b82f34b88420603a:7184e4a81a2c4a01a538cbc6aee20aea",
  "placement": 44,
  "time_alive": 777,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "2615728ed7a648a7b82f34b88420603a:7184e4a81a2c4a01a538cbc6aee20aea",
  "placement": 49,
  "time_alive": 272,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "2615728ed7a648a7b82f34b88420603a:7184e4a81a2c4a01a538cbc6aee20aea",
  "placement": 39,
  "time_alive": 828,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "2615728ed7a648a7b82f34b88420603a:7184e4a81a2c4a01a538cbc6aee20aea",
  "placement": 43,
  "time_alive": 691,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "2615728ed7a648a7b82f34b88420603a:7184e4a81a2c4a01a538cbc6aee20aea",
  "placement": 37,
  "time_alive": 908,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "2615728ed7a648a7b82f34b88420603a:7184e4a81a2c4a01a538cbc6aee20aea",
  "placement": 15,
  "time_alive": 1364,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "2615728ed7a648a7b82f34b88420603a:7184e4a81a2c4a01a538cbc6aee20aea",
  "placement": 46,
  "time_alive": 293,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "2615728ed7a648a7b82f34b88420603a:7184e4a81a2c4a01a538cbc6aee20aea",
  "placement": 30,
  "time_alive": 1121,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "d78e9008751d4cad9186525e045f20f3:f071c9138e3b46fe81f2919d6928df4b",
  "placement": 42,
  "time_alive": 823,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "d78e9008751d4cad9186525e045f20f3:f071c9138e3b46fe81f2919d6928df4b",
  "placement": 47,
  "time_alive": 608,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "d78e9008751d4cad9186525e045f20f3:f071c9138e3b46fe81f2919d6928df4b",
  "placement": 45,
  "time_alive": 314,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "d78e9008751d4cad9186525e045f20f3:f071c9138e3b46fe81f2919d6928df4b",
  "placement": 29,
  "time_alive": 1202,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "d78e9008751d4cad9186525e045f20f3:f071c9138e3b46fe81f2919d6928df4b",
  "placement": 47,
  "time_alive": 424,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "d78e9008751d4cad9186525e045f20f3:f071c9138e3b46fe81f2919d6928df4b",
  "placement": 48,
  "time_alive": 190,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "d78e9008751d4cad9186525e045f20f3:f071c9138e3b46fe81f2919d6928df4b",
  "placement": 39,
  "time_alive": 826,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "d78e9008751d4cad9186525e045f20f3:f071c9138e3b46fe81f2919d6928df4b",
  "placement": 49,
  "time_alive": 142,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 2,
  "time_alive": 1484,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 3,
  "time_alive": 1487,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 2,
  "time_alive": 1511,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 5,
  "time_alive": 1513,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 3,
  "time_alive": 1491,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 13,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 16,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 2,
  "time_alive": 1495,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 1,
  "time_alive": 1511,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 13,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 24,
  "time_alive": 638,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 6,
  "time_alive": 1474,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 11,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 13,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 12,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 8,
  "time_alive": 1497,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1498,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 3,
  "time_alive": 1500,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 3,
  "time_alive": 1479,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 4,
  "time_alive": 1473,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 30,
  "time_alive": 188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 27,
  "time_alive": 477,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 5,
  "time_alive": 1467,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 23,
  "time_alive": 941,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 9,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 6,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 3,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 12,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 6,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 4,
  "time_alive": 1482,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 6,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 24,
  "time_alive": 929,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 10,
  "time_alive": 1448,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 2,
  "time_alive": 1557,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 25,
  "time_alive": 609,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 30,
  "time_alive": 282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 8,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 12,
  "time_alive": 1378,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 23,
  "time_alive": 1016,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 22,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 22,
  "time_alive": 820,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 1,
  "time_alive": 1520,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 32,
  "time_alive": 365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 28,
  "time_alive": 376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 1,
  "time_alive": 1557,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 4,
  "time_alive": 1489,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 14,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 5,
  "time_alive": 1458,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 7,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 18,
  "time_alive": 1272,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 7,
  "time_alive": 1507,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 18,
  "time_alive": 1184,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 17,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 7,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 16,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 9,
  "time_alive": 1451,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 30,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 2,
  "time_alive": 1498,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 22,
  "time_alive": 1002,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 14,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 14,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 5,
  "time_alive": 1483,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 3,
  "time_alive": 1531,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 19,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 27,
  "time_alive": 551,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 1,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 20,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 25,
  "time_alive": 591,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 9,
  "time_alive": 1494,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 11,
  "time_alive": 1411,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 10,
  "time_alive": 1453,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 10,
  "time_alive": 1421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 5,
  "time_alive": 1457,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 19,
  "time_alive": 1233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 6,
  "time_alive": 1509,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 7,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 16,
  "time_alive": 1354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 19,
  "time_alive": 1251,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 27,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 8,
  "time_alive": 1469,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 19,
  "time_alive": 1244,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 8,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 8,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 18,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 15,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 4,
  "time_alive": 1495,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 14,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 28,
  "time_alive": 349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 15,
  "time_alive": 1366,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:d62ca9b7e560445f977f0bfaf5a7ef51:f6d565f6647242ac8735227af015e4d8",
  "placement": 4,
  "time_alive": 1461,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:d62ca9b7e560445f977f0bfaf5a7ef51:f6d565f6647242ac8735227af015e4d8",
  "placement": 33,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:d62ca9b7e560445f977f0bfaf5a7ef51:f6d565f6647242ac8735227af015e4d8",
  "placement": 15,
  "time_alive": 1370,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:d62ca9b7e560445f977f0bfaf5a7ef51:f6d565f6647242ac8735227af015e4d8",
  "placement": 11,
  "time_alive": 1479,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:d62ca9b7e560445f977f0bfaf5a7ef51:f6d565f6647242ac8735227af015e4d8",
  "placement": 10,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:d62ca9b7e560445f977f0bfaf5a7ef51:f6d565f6647242ac8735227af015e4d8",
  "placement": 31,
  "time_alive": 238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 10,
  "time_alive": 1398,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 17,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 4,
  "time_alive": 1519,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 13,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 25,
  "time_alive": 609,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "0a234863aa65404ab32639036d365946:4d89d57c11a14daa9fe03d11dde07945:5ed7f097459243788080e5969e09af66",
  "placement": 22,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "0a234863aa65404ab32639036d365946:4d89d57c11a14daa9fe03d11dde07945:5ed7f097459243788080e5969e09af66",
  "placement": 1,
  "time_alive": 1495,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "0a234863aa65404ab32639036d365946:4d89d57c11a14daa9fe03d11dde07945:5ed7f097459243788080e5969e09af66",
  "placement": 21,
  "time_alive": 1150,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "0a234863aa65404ab32639036d365946:4d89d57c11a14daa9fe03d11dde07945:5ed7f097459243788080e5969e09af66",
  "placement": 18,
  "time_alive": 1267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "0a234863aa65404ab32639036d365946:4d89d57c11a14daa9fe03d11dde07945:5ed7f097459243788080e5969e09af66",
  "placement": 12,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "0a234863aa65404ab32639036d365946:4d89d57c11a14daa9fe03d11dde07945:5ed7f097459243788080e5969e09af66",
  "placement": 18,
  "time_alive": 1287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 15,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 25,
  "time_alive": 876,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 7,
  "time_alive": 1476,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 31,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 29,
  "time_alive": 342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 11,
  "time_alive": 1446,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 28,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 28,
  "time_alive": 684,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 14,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 10,
  "time_alive": 1490,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 17,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 12,
  "time_alive": 1444,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 13,
  "time_alive": 1407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 17,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 20,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 17,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 9,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 19,
  "time_alive": 1122,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 20,
  "time_alive": 1183,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 23,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 22,
  "time_alive": 1037,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 15,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 15,
  "time_alive": 1361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 2,
  "time_alive": 1520,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 12,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 22,
  "time_alive": 1145,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 6,
  "time_alive": 1479,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 32,
  "time_alive": 114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 31,
  "time_alive": 175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 32,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 21,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 11,
  "time_alive": 1383,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 11,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 20,
  "time_alive": 1242,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 30,
  "time_alive": 320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 7,
  "time_alive": 1471,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 30,
  "time_alive": 598,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 24,
  "time_alive": 960,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 29,
  "time_alive": 421,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 16,
  "time_alive": 1348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 9,
  "time_alive": 1468,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 24,
  "time_alive": 1138,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 8,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 16,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 23,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 20,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 26,
  "time_alive": 604,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 25,
  "time_alive": 989,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 9,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 24,
  "time_alive": 1038,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 14,
  "time_alive": 1384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 28,
  "time_alive": 521,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 27,
  "time_alive": 870,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 21,
  "time_alive": 1158,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 26,
  "time_alive": 536,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 26,
  "time_alive": 637,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 26,
  "time_alive": 580,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 24,
  "time_alive": 855,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:8fdbc27d0bc14de0956576deebb0c3d8:a48f656128234f10ad175605ddd314ab",
  "placement": 30,
  "time_alive": 156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:8fdbc27d0bc14de0956576deebb0c3d8:a48f656128234f10ad175605ddd314ab",
  "placement": 18,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:8fdbc27d0bc14de0956576deebb0c3d8:a48f656128234f10ad175605ddd314ab",
  "placement": 29,
  "time_alive": 316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:8fdbc27d0bc14de0956576deebb0c3d8:a48f656128234f10ad175605ddd314ab",
  "placement": 21,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:8fdbc27d0bc14de0956576deebb0c3d8:a48f656128234f10ad175605ddd314ab",
  "placement": 27,
  "time_alive": 364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:8fdbc27d0bc14de0956576deebb0c3d8:a48f656128234f10ad175605ddd314ab",
  "placement": 5,
  "time_alive": 1475,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:7bb03ea08e16445bbe0784104bffa43f:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 26,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:7bb03ea08e16445bbe0784104bffa43f:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 19,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:7bb03ea08e16445bbe0784104bffa43f:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 13,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:7bb03ea08e16445bbe0784104bffa43f:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 16,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:7bb03ea08e16445bbe0784104bffa43f:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 23,
  "time_alive": 747,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:7bb03ea08e16445bbe0784104bffa43f:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 21,
  "time_alive": 1078,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 29,
  "time_alive": 532,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 29,
  "time_alive": 682,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 31,
  "time_alive": 114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 28,
  "time_alive": 423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 32,
  "time_alive": 151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 20,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 23,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 26,
  "time_alive": 876,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025a85c8-5b85-4028-9abd-dff344d10f33",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 27,
  "time_alive": 514,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 25,
  "time_alive": 885,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06760ad8-558f-4d8d-9fa1-b3a496ffa76a",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 21,
  "time_alive": 1003,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "120601f9-6cf8-4182-b82b-88a3638b0c6d",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 29,
  "time_alive": 340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 17,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 31,
  "time_alive": 459,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1457,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 4,
  "time_alive": 1427,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 6,
  "time_alive": 1388,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1422,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 12,
  "time_alive": 1311,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 3,
  "time_alive": 1439,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 10,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 2,
  "time_alive": 1479,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 11,
  "time_alive": 1313,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 7,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 8,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 10,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 1,
  "time_alive": 1437,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 3,
  "time_alive": 1444,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 5,
  "time_alive": 1387,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 21,
  "time_alive": 1014,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 9,
  "time_alive": 1335,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 4,
  "time_alive": 1417,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 8,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 11,
  "time_alive": 1365,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 12,
  "time_alive": 1307,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 27,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 2,
  "time_alive": 1409,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 9,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 12,
  "time_alive": 1351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 10,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 3,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 8,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 10,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 11,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 15,
  "time_alive": 1292,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 7,
  "time_alive": 1385,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 4,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 16,
  "time_alive": 1113,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 4,
  "time_alive": 1385,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 12,
  "time_alive": 1369,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 6,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 4,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1472,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 17,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 25,
  "time_alive": 628,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 2,
  "time_alive": 1457,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 26,
  "time_alive": 777,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 21,
  "time_alive": 1100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 24,
  "time_alive": 1018,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 11,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 3,
  "time_alive": 1396,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 32,
  "time_alive": 490,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 11,
  "time_alive": 1358,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 5,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 14,
  "time_alive": 1306,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 12,
  "time_alive": 1318,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 16,
  "time_alive": 1253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 31,
  "time_alive": 561,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 13,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 19,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 6,
  "time_alive": 1378,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 6,
  "time_alive": 1340,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 14,
  "time_alive": 1282,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 27,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 27,
  "time_alive": 692,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 14,
  "time_alive": 1305,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 30,
  "time_alive": 753,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 10,
  "time_alive": 1330,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 1,
  "time_alive": 1409,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 17,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 23,
  "time_alive": 1058,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 9,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 7,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 2,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 30,
  "time_alive": 386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 26,
  "time_alive": 846,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 30,
  "time_alive": 454,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 1,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 10,
  "time_alive": 1313,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 31,
  "time_alive": 143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 15,
  "time_alive": 1260,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 19,
  "time_alive": 1199,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 9,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 22,
  "time_alive": 1097,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 15,
  "time_alive": 1289,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 5,
  "time_alive": 1364,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 7,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 6,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 2,
  "time_alive": 1437,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 25,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 25,
  "time_alive": 937,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 9,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 17,
  "time_alive": 1239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "483c035181ad415c9b9be1c8157556c2:9b58e1b963ad4b92a6e282c33dd61915:f141ce7fc55b4ba18deb96ed70af2b31",
  "placement": 20,
  "time_alive": 1190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "483c035181ad415c9b9be1c8157556c2:9b58e1b963ad4b92a6e282c33dd61915:f141ce7fc55b4ba18deb96ed70af2b31",
  "placement": 22,
  "time_alive": 1067,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "483c035181ad415c9b9be1c8157556c2:9b58e1b963ad4b92a6e282c33dd61915:f141ce7fc55b4ba18deb96ed70af2b31",
  "placement": 24,
  "time_alive": 875,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "483c035181ad415c9b9be1c8157556c2:9b58e1b963ad4b92a6e282c33dd61915:f141ce7fc55b4ba18deb96ed70af2b31",
  "placement": 31,
  "time_alive": 162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "483c035181ad415c9b9be1c8157556c2:9b58e1b963ad4b92a6e282c33dd61915:f141ce7fc55b4ba18deb96ed70af2b31",
  "placement": 3,
  "time_alive": 1399,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "483c035181ad415c9b9be1c8157556c2:9b58e1b963ad4b92a6e282c33dd61915:f141ce7fc55b4ba18deb96ed70af2b31",
  "placement": 6,
  "time_alive": 1363,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 5,
  "time_alive": 1411,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 18,
  "time_alive": 1247,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 18,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 16,
  "time_alive": 1273,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 4,
  "time_alive": 1379,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 18,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 7,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 3,
  "time_alive": 1434,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 28,
  "time_alive": 698,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 28,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 19,
  "time_alive": 1161,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 24,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 5,
  "time_alive": 1400,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 17,
  "time_alive": 1239,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 32,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 26,
  "time_alive": 253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 5,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 23,
  "time_alive": 1067,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 14,
  "time_alive": 1334,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 16,
  "time_alive": 1279,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 8,
  "time_alive": 1350,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 30,
  "time_alive": 186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 29,
  "time_alive": 415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 18,
  "time_alive": 1277,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 17,
  "time_alive": 1277,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 13,
  "time_alive": 1307,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 13,
  "time_alive": 1306,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 15,
  "time_alive": 1288,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 28,
  "time_alive": 436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 33,
  "time_alive": 249,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 28,
  "time_alive": 568,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 32,
  "time_alive": 128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 9,
  "time_alive": 1316,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 20,
  "time_alive": 1055,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 11,
  "time_alive": 1322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 13,
  "time_alive": 1361,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 31,
  "time_alive": 391,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 23,
  "time_alive": 877,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 20,
  "time_alive": 1167,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 18,
  "time_alive": 1094,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 21,
  "time_alive": 1099,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 30,
  "time_alive": 719,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 7,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 15,
  "time_alive": 1293,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 18,
  "time_alive": 1257,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 14,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 27,
  "time_alive": 444,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 14,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 20,
  "time_alive": 1156,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 8,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 22,
  "time_alive": 1095,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 28,
  "time_alive": 225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 31,
  "time_alive": 316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:9090b8465e6a4a70bbf7527e10b5be86:91554bf8b62a489697f8585b3a134d81",
  "placement": 25,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:9090b8465e6a4a70bbf7527e10b5be86:91554bf8b62a489697f8585b3a134d81",
  "placement": 33,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:9090b8465e6a4a70bbf7527e10b5be86:91554bf8b62a489697f8585b3a134d81",
  "placement": 31,
  "time_alive": 198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:9090b8465e6a4a70bbf7527e10b5be86:91554bf8b62a489697f8585b3a134d81",
  "placement": 17,
  "time_alive": 1272,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:9090b8465e6a4a70bbf7527e10b5be86:91554bf8b62a489697f8585b3a134d81",
  "placement": 13,
  "time_alive": 1310,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:9090b8465e6a4a70bbf7527e10b5be86:91554bf8b62a489697f8585b3a134d81",
  "placement": 13,
  "time_alive": 1295,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:f977c39693084756bcc3a14f99658ebc",
  "placement": 21,
  "time_alive": 1139,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:f977c39693084756bcc3a14f99658ebc",
  "placement": 29,
  "time_alive": 523,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:f977c39693084756bcc3a14f99658ebc",
  "placement": 12,
  "time_alive": 1324,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:f977c39693084756bcc3a14f99658ebc",
  "placement": 23,
  "time_alive": 1052,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:f977c39693084756bcc3a14f99658ebc",
  "placement": 32,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 8,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 19,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 26,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 21,
  "time_alive": 1158,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 23,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 26,
  "time_alive": 523,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 28,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 21,
  "time_alive": 1145,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 29,
  "time_alive": 689,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 19,
  "time_alive": 1189,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 22,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 22,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 29,
  "time_alive": 812,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 25,
  "time_alive": 818,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 30,
  "time_alive": 375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 29,
  "time_alive": 792,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 19,
  "time_alive": 1077,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 20,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 15,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 16,
  "time_alive": 1284,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 20,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 26,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 24,
  "time_alive": 603,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 32,
  "time_alive": 240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 22,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 32,
  "time_alive": 282,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 33,
  "time_alive": 124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 33,
  "time_alive": 46,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 29,
  "time_alive": 193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 24,
  "time_alive": 696,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "076a30d8-46a5-4f6c-b578-2dcbace7437b",
  "team_id": "402e16a701f0488b95a4fded9c3856c4:8af8b8052dce4650b8ed2f5eac5f09c8:a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 16,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0051b6c5-01d8-4cbf-a89a-83da97cb4443",
  "team_id": "402e16a701f0488b95a4fded9c3856c4:8af8b8052dce4650b8ed2f5eac5f09c8:a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 24,
  "time_alive": 1033,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0036f7c4-ff1f-4703-971f-67a59b73b84a",
  "team_id": "402e16a701f0488b95a4fded9c3856c4:8af8b8052dce4650b8ed2f5eac5f09c8:a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 27,
  "time_alive": 805,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e35364-a9c7-4006-aa32-3c6e16bfe8f3",
  "team_id": "402e16a701f0488b95a4fded9c3856c4:8af8b8052dce4650b8ed2f5eac5f09c8:a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 27,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e98a8e-634e-4828-ba83-f806ae614c1a",
  "team_id": "402e16a701f0488b95a4fded9c3856c4:8af8b8052dce4650b8ed2f5eac5f09c8:a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 25,
  "time_alive": 497,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a8e71b9-a90e-4272-967c-f89d73684a52",
  "team_id": "402e16a701f0488b95a4fded9c3856c4:8af8b8052dce4650b8ed2f5eac5f09c8:a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 23,
  "time_alive": 764,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 6,
  "time_alive": 1427,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 3,
  "time_alive": 1615,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 4,
  "time_alive": 1586,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 1,
  "time_alive": 1629,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 12,
  "time_alive": 1350,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 10,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 28,
  "time_alive": 524,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 4,
  "time_alive": 1593,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 6,
  "time_alive": 1537,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 3,
  "time_alive": 1526,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 5,
  "time_alive": 1523,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 6,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 2,
  "time_alive": 1549,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 8,
  "time_alive": 1525,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 5,
  "time_alive": 1549,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 12,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 6,
  "time_alive": 1448,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 15,
  "time_alive": 1286,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 8,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 1,
  "time_alive": 1626,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 22,
  "time_alive": 1071,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 13,
  "time_alive": 1374,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 2,
  "time_alive": 1597,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 26,
  "time_alive": 521,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 1,
  "time_alive": 1549,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 12,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 12,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 15,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 23,
  "time_alive": 1059,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 8,
  "time_alive": 1378,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 31,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 10,
  "time_alive": 1494,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 3,
  "time_alive": 1648,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 2,
  "time_alive": 1629,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 24,
  "time_alive": 1045,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 13,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 19,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 9,
  "time_alive": 1499,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 9,
  "time_alive": 1493,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 4,
  "time_alive": 1519,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 3,
  "time_alive": 1589,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 18,
  "time_alive": 1229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 12,
  "time_alive": 1341,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 5,
  "time_alive": 1576,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 16,
  "time_alive": 1301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 26,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 11,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 4,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 5,
  "time_alive": 1447,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 7,
  "time_alive": 1528,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 32,
  "time_alive": 193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 6,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 26,
  "time_alive": 646,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 31,
  "time_alive": 307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 23,
  "time_alive": 1136,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 15,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 11,
  "time_alive": 1397,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 10,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 19,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 9,
  "time_alive": 1374,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 20,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 25,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 25,
  "time_alive": 810,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 27,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 1,
  "time_alive": 1597,
  "elims": 18,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 22,
  "time_alive": 991,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 4,
  "time_alive": 1499,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 16,
  "time_alive": 1408,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 13,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 5,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 22,
  "time_alive": 1063,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 14,
  "time_alive": 1295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 14,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 29,
  "time_alive": 210,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 15,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 18,
  "time_alive": 1285,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 25,
  "time_alive": 934,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 1,
  "time_alive": 1510,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 7,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 6,
  "time_alive": 1553,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 26,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 24,
  "time_alive": 1142,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 4,
  "time_alive": 1546,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 28,
  "time_alive": 402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 11,
  "time_alive": 1349,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 17,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 18,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 8,
  "time_alive": 1424,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 10,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 24,
  "time_alive": 885,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 10,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 30,
  "time_alive": 159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 8,
  "time_alive": 1508,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 14,
  "time_alive": 1372,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 9,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 17,
  "time_alive": 1264,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "0c13aa4293f949f0aed1575b56a86138:ca65bb40e39f4eb4930175cdedf0a907:fef99c2b6a2a4995b5c0e250e97272e6",
  "placement": 22,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "0c13aa4293f949f0aed1575b56a86138:ca65bb40e39f4eb4930175cdedf0a907:fef99c2b6a2a4995b5c0e250e97272e6",
  "placement": 22,
  "time_alive": 1207,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "0c13aa4293f949f0aed1575b56a86138:ca65bb40e39f4eb4930175cdedf0a907:fef99c2b6a2a4995b5c0e250e97272e6",
  "placement": 19,
  "time_alive": 1171,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "0c13aa4293f949f0aed1575b56a86138:ca65bb40e39f4eb4930175cdedf0a907:fef99c2b6a2a4995b5c0e250e97272e6",
  "placement": 11,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "0c13aa4293f949f0aed1575b56a86138:ca65bb40e39f4eb4930175cdedf0a907:fef99c2b6a2a4995b5c0e250e97272e6",
  "placement": 13,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "0c13aa4293f949f0aed1575b56a86138:ca65bb40e39f4eb4930175cdedf0a907:fef99c2b6a2a4995b5c0e250e97272e6",
  "placement": 3,
  "time_alive": 1488,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 27,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 23,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 20,
  "time_alive": 1095,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 29,
  "time_alive": 614,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 7,
  "time_alive": 1426,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 2,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 9,
  "time_alive": 1358,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 11,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 14,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 19,
  "time_alive": 1222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 20,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 7,
  "time_alive": 1396,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 21,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 13,
  "time_alive": 1429,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 2,
  "time_alive": 1648,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 22,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 27,
  "time_alive": 455,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 23,
  "time_alive": 913,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 32,
  "time_alive": 190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 28,
  "time_alive": 226,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 1,
  "time_alive": 1648,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 21,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 30,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 27,
  "time_alive": 419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 29,
  "time_alive": 336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 2,
  "time_alive": 1626,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 24,
  "time_alive": 810,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 30,
  "time_alive": 270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 29,
  "time_alive": 337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 29,
  "time_alive": 389,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 13,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 21,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 23,
  "time_alive": 1005,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 9,
  "time_alive": 1411,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 15,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 30,
  "time_alive": 327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 3,
  "time_alive": 1521,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 24,
  "time_alive": 929,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 10,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 17,
  "time_alive": 1291,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 28,
  "time_alive": 448,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 32,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 30,
  "time_alive": 312,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 7,
  "time_alive": 1511,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 20,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 16,
  "time_alive": 1257,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 5,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 27,
  "time_alive": 599,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 27,
  "time_alive": 800,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 23,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 8,
  "time_alive": 1400,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 12,
  "time_alive": 1326,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 15,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 20,
  "time_alive": 1265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 28,
  "time_alive": 613,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 7,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 14,
  "time_alive": 1296,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 16,
  "time_alive": 1270,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 16,
  "time_alive": 1296,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 14,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 21,
  "time_alive": 1085,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 25,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 18,
  "time_alive": 1238,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 21,
  "time_alive": 994,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 24,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 18,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 17,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 28,
  "time_alive": 771,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 17,
  "time_alive": 1249,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 11,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "28f70dfde220446da4589b3a6273d6c8:69270cde99714db59e6bad8a384cac3d:8fb8f9f2829d42c7bbf03363815df450",
  "placement": 18,
  "time_alive": 1287,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "28f70dfde220446da4589b3a6273d6c8:69270cde99714db59e6bad8a384cac3d:8fb8f9f2829d42c7bbf03363815df450",
  "placement": 19,
  "time_alive": 1279,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "28f70dfde220446da4589b3a6273d6c8:69270cde99714db59e6bad8a384cac3d:8fb8f9f2829d42c7bbf03363815df450",
  "placement": 30,
  "time_alive": 379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "28f70dfde220446da4589b3a6273d6c8:69270cde99714db59e6bad8a384cac3d:8fb8f9f2829d42c7bbf03363815df450",
  "placement": 31,
  "time_alive": 160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "28f70dfde220446da4589b3a6273d6c8:69270cde99714db59e6bad8a384cac3d:8fb8f9f2829d42c7bbf03363815df450",
  "placement": 31,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "28f70dfde220446da4589b3a6273d6c8:69270cde99714db59e6bad8a384cac3d:8fb8f9f2829d42c7bbf03363815df450",
  "placement": 20,
  "time_alive": 1020,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 25,
  "time_alive": 963,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01d96a5e-5472-48c0-a243-8295116372ba",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 26,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 29,
  "time_alive": 457,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 32,
  "time_alive": 131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 21,
  "time_alive": 1066,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 25,
  "time_alive": 765,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 26,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 31,
  "time_alive": 232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e380c9-bfb8-4275-8220-dc74702d5bc0",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 16,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03b7a6ed-b0f0-467a-80aa-6e31185f779a",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 32,
  "time_alive": 189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f2d8d6-0e15-44b9-9373-6be2c5a20f13",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 19,
  "time_alive": 1066,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01734918-b0b8-47e6-9af6-398e9f604bbc",
  "team_id": "a39887890b4b4041b35f47b2cb60b248:b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 17,
  "time_alive": 1291,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 17,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 31,
  "time_alive": 780,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 2,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 1,
  "time_alive": 1477,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 2,
  "time_alive": 1494,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 1,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 5,
  "time_alive": 1440,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 11,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 5,
  "time_alive": 1404,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 27,
  "time_alive": 548,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1494,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 8,
  "time_alive": 1384,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 2,
  "time_alive": 1460,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 17,
  "time_alive": 1299,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 4,
  "time_alive": 1418,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 11,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 6,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 10,
  "time_alive": 1355,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 6,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 5,
  "time_alive": 1445,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 12,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 2,
  "time_alive": 1477,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 25,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 9,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 21,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 6,
  "time_alive": 1427,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 11,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 3,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 5,
  "time_alive": 1456,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 4,
  "time_alive": 1446,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 11,
  "time_alive": 1377,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 29,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 23,
  "time_alive": 1069,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 12,
  "time_alive": 1339,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 7,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 3,
  "time_alive": 1457,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 4,
  "time_alive": 1441,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 24,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 7,
  "time_alive": 1379,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 10,
  "time_alive": 1361,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 23,
  "time_alive": 962,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 6,
  "time_alive": 1397,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 18,
  "time_alive": 1282,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 7,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 10,
  "time_alive": 1355,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 7,
  "time_alive": 1369,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 12,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 31,
  "time_alive": 228,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 9,
  "time_alive": 1394,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 19,
  "time_alive": 1238,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 3,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 13,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 16,
  "time_alive": 1301,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 20,
  "time_alive": 1144,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "20a185bb314f48208365e66815812ee9:24224a137c3e417584103af1f5f83598:ce65be929e05415d88be3cd9b79e93d3",
  "placement": 1,
  "time_alive": 1460,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "20a185bb314f48208365e66815812ee9:24224a137c3e417584103af1f5f83598:ce65be929e05415d88be3cd9b79e93d3",
  "placement": 28,
  "time_alive": 831,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "20a185bb314f48208365e66815812ee9:24224a137c3e417584103af1f5f83598:ce65be929e05415d88be3cd9b79e93d3",
  "placement": 25,
  "time_alive": 980,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "20a185bb314f48208365e66815812ee9:24224a137c3e417584103af1f5f83598:ce65be929e05415d88be3cd9b79e93d3",
  "placement": 20,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "20a185bb314f48208365e66815812ee9:24224a137c3e417584103af1f5f83598:ce65be929e05415d88be3cd9b79e93d3",
  "placement": 13,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "20a185bb314f48208365e66815812ee9:24224a137c3e417584103af1f5f83598:ce65be929e05415d88be3cd9b79e93d3",
  "placement": 7,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "776df237ccdb40e99f9e0c5c5d7db820:a8c1697410534dd89c7f3b1f287d98ab:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 23,
  "time_alive": 1114,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "776df237ccdb40e99f9e0c5c5d7db820:a8c1697410534dd89c7f3b1f287d98ab:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 3,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "776df237ccdb40e99f9e0c5c5d7db820:a8c1697410534dd89c7f3b1f287d98ab:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 14,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "776df237ccdb40e99f9e0c5c5d7db820:a8c1697410534dd89c7f3b1f287d98ab:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 22,
  "time_alive": 1069,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "776df237ccdb40e99f9e0c5c5d7db820:a8c1697410534dd89c7f3b1f287d98ab:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 11,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "776df237ccdb40e99f9e0c5c5d7db820:a8c1697410534dd89c7f3b1f287d98ab:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 5,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:299fd10f3f8842468153e1a9eca81b32:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 15,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:299fd10f3f8842468153e1a9eca81b32:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 1,
  "time_alive": 1482,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:299fd10f3f8842468153e1a9eca81b32:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 26,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:299fd10f3f8842468153e1a9eca81b32:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 17,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:299fd10f3f8842468153e1a9eca81b32:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 26,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:299fd10f3f8842468153e1a9eca81b32:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 16,
  "time_alive": 1303,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "43b453c633ce4704a50740a558003edf:5970807d2db64d00ac525f516fb39d6a:8e07108bd40c4b9e9f0064f83335157d",
  "placement": 20,
  "time_alive": 1187,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "43b453c633ce4704a50740a558003edf:5970807d2db64d00ac525f516fb39d6a:8e07108bd40c4b9e9f0064f83335157d",
  "placement": 25,
  "time_alive": 1093,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "43b453c633ce4704a50740a558003edf:5970807d2db64d00ac525f516fb39d6a:8e07108bd40c4b9e9f0064f83335157d",
  "placement": 16,
  "time_alive": 1301,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "43b453c633ce4704a50740a558003edf:5970807d2db64d00ac525f516fb39d6a:8e07108bd40c4b9e9f0064f83335157d",
  "placement": 9,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "43b453c633ce4704a50740a558003edf:5970807d2db64d00ac525f516fb39d6a:8e07108bd40c4b9e9f0064f83335157d",
  "placement": 19,
  "time_alive": 1253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "43b453c633ce4704a50740a558003edf:5970807d2db64d00ac525f516fb39d6a:8e07108bd40c4b9e9f0064f83335157d",
  "placement": 2,
  "time_alive": 1481,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 10,
  "time_alive": 1391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 23,
  "time_alive": 1134,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 9,
  "time_alive": 1366,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 21,
  "time_alive": 1078,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 3,
  "time_alive": 1487,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 17,
  "time_alive": 1302,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36:986d718c088d4dcc8220784432d359a5:b45dda5630a04a28ba16abd2ee501a67",
  "placement": 25,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36:986d718c088d4dcc8220784432d359a5:b45dda5630a04a28ba16abd2ee501a67",
  "placement": 2,
  "time_alive": 1482,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36:986d718c088d4dcc8220784432d359a5:b45dda5630a04a28ba16abd2ee501a67",
  "placement": 13,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36:986d718c088d4dcc8220784432d359a5:b45dda5630a04a28ba16abd2ee501a67",
  "placement": 16,
  "time_alive": 1304,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36:986d718c088d4dcc8220784432d359a5:b45dda5630a04a28ba16abd2ee501a67",
  "placement": 15,
  "time_alive": 1324,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36:986d718c088d4dcc8220784432d359a5:b45dda5630a04a28ba16abd2ee501a67",
  "placement": 29,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 22,
  "time_alive": 1133,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 12,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 6,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 4,
  "time_alive": 1430,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 10,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 23,
  "time_alive": 1110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 32,
  "time_alive": 101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 33,
  "time_alive": 61,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 30,
  "time_alive": 216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 5,
  "time_alive": 1402,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 4,
  "time_alive": 1466,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 32,
  "time_alive": 181,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 3,
  "time_alive": 1453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 9,
  "time_alive": 1397,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 19,
  "time_alive": 1172,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 30,
  "time_alive": 476,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 17,
  "time_alive": 1301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "86dce499042442e78a2b131cba105d16:db1756e9d5cf422ea0b8897a6b0b9311:e1dca98d9b074564a3bc51207fed9893",
  "placement": 11,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:86a60b8208814a3c9f32bb4bd5cc5813:927a2ab2ddde4c7595b4fead1b8f4e69",
  "placement": 16,
  "time_alive": 1317,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:86a60b8208814a3c9f32bb4bd5cc5813:927a2ab2ddde4c7595b4fead1b8f4e69",
  "placement": 26,
  "time_alive": 937,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:86a60b8208814a3c9f32bb4bd5cc5813:927a2ab2ddde4c7595b4fead1b8f4e69",
  "placement": 1,
  "time_alive": 1439,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:86a60b8208814a3c9f32bb4bd5cc5813:927a2ab2ddde4c7595b4fead1b8f4e69",
  "placement": 28,
  "time_alive": 520,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:86a60b8208814a3c9f32bb4bd5cc5813:927a2ab2ddde4c7595b4fead1b8f4e69",
  "placement": 21,
  "time_alive": 1103,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:86a60b8208814a3c9f32bb4bd5cc5813:927a2ab2ddde4c7595b4fead1b8f4e69",
  "placement": 21,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 7,
  "time_alive": 1420,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 8,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 27,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 29,
  "time_alive": 487,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:c76b125b30b94badba8a5952b3729fe6:ea1eead380a14859885c25cafb387413",
  "placement": 9,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "cf3201921bf34faebe9b84ad65339b07:d1626b91ccdb4b39b78be9d542fdc178:ec542fd57815454fa56e09fdb9e93e8b",
  "placement": 24,
  "time_alive": 983,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "cf3201921bf34faebe9b84ad65339b07:d1626b91ccdb4b39b78be9d542fdc178:ec542fd57815454fa56e09fdb9e93e8b",
  "placement": 4,
  "time_alive": 1453,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "cf3201921bf34faebe9b84ad65339b07:d1626b91ccdb4b39b78be9d542fdc178:ec542fd57815454fa56e09fdb9e93e8b",
  "placement": 17,
  "time_alive": 1294,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "cf3201921bf34faebe9b84ad65339b07:d1626b91ccdb4b39b78be9d542fdc178:ec542fd57815454fa56e09fdb9e93e8b",
  "placement": 14,
  "time_alive": 1331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "cf3201921bf34faebe9b84ad65339b07:d1626b91ccdb4b39b78be9d542fdc178:ec542fd57815454fa56e09fdb9e93e8b",
  "placement": 20,
  "time_alive": 1212,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "cf3201921bf34faebe9b84ad65339b07:d1626b91ccdb4b39b78be9d542fdc178:ec542fd57815454fa56e09fdb9e93e8b",
  "placement": 13,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:1368b4f43f234cf3bc4e9c8b2abd492f:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 8,
  "time_alive": 1399,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:1368b4f43f234cf3bc4e9c8b2abd492f:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 16,
  "time_alive": 1314,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:1368b4f43f234cf3bc4e9c8b2abd492f:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 29,
  "time_alive": 362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:1368b4f43f234cf3bc4e9c8b2abd492f:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 33,
  "time_alive": 64,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:1368b4f43f234cf3bc4e9c8b2abd492f:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 31,
  "time_alive": 109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:1368b4f43f234cf3bc4e9c8b2abd492f:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 30,
  "time_alive": 346,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 27,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 15,
  "time_alive": 1315,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 8,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 26,
  "time_alive": 682,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 22,
  "time_alive": 1093,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:a0e398c345cd493a81bbde26f57317b0:e78e9cde431a4bda99bbe884324099bb",
  "placement": 18,
  "time_alive": 1276,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 12,
  "time_alive": 1375,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 10,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 21,
  "time_alive": 1089,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 19,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 27,
  "time_alive": 569,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "247a94da748a4530b9d587565c9587d5:4eb2e28fd9ad4dc3ac2013eb2b816fc6:4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 12,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "a42046964bdd47d792d7aa827c8532e8:dc937f5c1fa648d7bcb002a8b57ae2a6:e6d4d2b652494ae3834fcdcce0665d5e",
  "placement": 31,
  "time_alive": 131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "a42046964bdd47d792d7aa827c8532e8:dc937f5c1fa648d7bcb002a8b57ae2a6:e6d4d2b652494ae3834fcdcce0665d5e",
  "placement": 18,
  "time_alive": 1274,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "a42046964bdd47d792d7aa827c8532e8:dc937f5c1fa648d7bcb002a8b57ae2a6:e6d4d2b652494ae3834fcdcce0665d5e",
  "placement": 18,
  "time_alive": 1221,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "a42046964bdd47d792d7aa827c8532e8:dc937f5c1fa648d7bcb002a8b57ae2a6:e6d4d2b652494ae3834fcdcce0665d5e",
  "placement": 24,
  "time_alive": 1032,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "a42046964bdd47d792d7aa827c8532e8:dc937f5c1fa648d7bcb002a8b57ae2a6:e6d4d2b652494ae3834fcdcce0665d5e",
  "placement": 14,
  "time_alive": 1336,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "a42046964bdd47d792d7aa827c8532e8:dc937f5c1fa648d7bcb002a8b57ae2a6:e6d4d2b652494ae3834fcdcce0665d5e",
  "placement": 22,
  "time_alive": 1120,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 13,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 22,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 31,
  "time_alive": 193,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 8,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 32,
  "time_alive": 97,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec:d52682de72074d70b0c72d2d04d7b069:e20705595354455a81ec522ce19d90f8",
  "placement": 15,
  "time_alive": 1307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "104d79cffec147d7a2f9f6a4199c5a59:6be77ed069844132a412323137bc290b:8992727586fa45d9960336a40b2a686e",
  "placement": 29,
  "time_alive": 800,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "104d79cffec147d7a2f9f6a4199c5a59:6be77ed069844132a412323137bc290b:8992727586fa45d9960336a40b2a686e",
  "placement": 20,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "104d79cffec147d7a2f9f6a4199c5a59:6be77ed069844132a412323137bc290b:8992727586fa45d9960336a40b2a686e",
  "placement": 28,
  "time_alive": 762,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "104d79cffec147d7a2f9f6a4199c5a59:6be77ed069844132a412323137bc290b:8992727586fa45d9960336a40b2a686e",
  "placement": 6,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "104d79cffec147d7a2f9f6a4199c5a59:6be77ed069844132a412323137bc290b:8992727586fa45d9960336a40b2a686e",
  "placement": 8,
  "time_alive": 1418,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "104d79cffec147d7a2f9f6a4199c5a59:6be77ed069844132a412323137bc290b:8992727586fa45d9960336a40b2a686e",
  "placement": 27,
  "time_alive": 490,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:3ee6edc8d4fa4d5398c5345174070e4e:4aa3f206c40545b8b582f1f764d001be",
  "placement": 19,
  "time_alive": 1189,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:3ee6edc8d4fa4d5398c5345174070e4e:4aa3f206c40545b8b582f1f764d001be",
  "placement": 14,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:3ee6edc8d4fa4d5398c5345174070e4e:4aa3f206c40545b8b582f1f764d001be",
  "placement": 24,
  "time_alive": 992,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:3ee6edc8d4fa4d5398c5345174070e4e:4aa3f206c40545b8b582f1f764d001be",
  "placement": 23,
  "time_alive": 1035,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:3ee6edc8d4fa4d5398c5345174070e4e:4aa3f206c40545b8b582f1f764d001be",
  "placement": 24,
  "time_alive": 879,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:3ee6edc8d4fa4d5398c5345174070e4e:4aa3f206c40545b8b582f1f764d001be",
  "placement": 28,
  "time_alive": 466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "52b877c93911417c8f3c9329c4e61a23:6f01cd693ace4bdca6409b6cf8f1d5b3:77a2495cdae842dbb573795774e95e31",
  "placement": 26,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "52b877c93911417c8f3c9329c4e61a23:6f01cd693ace4bdca6409b6cf8f1d5b3:77a2495cdae842dbb573795774e95e31",
  "placement": 13,
  "time_alive": 1346,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "52b877c93911417c8f3c9329c4e61a23:6f01cd693ace4bdca6409b6cf8f1d5b3:77a2495cdae842dbb573795774e95e31",
  "placement": 32,
  "time_alive": 186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "52b877c93911417c8f3c9329c4e61a23:6f01cd693ace4bdca6409b6cf8f1d5b3:77a2495cdae842dbb573795774e95e31",
  "placement": 31,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "52b877c93911417c8f3c9329c4e61a23:6f01cd693ace4bdca6409b6cf8f1d5b3:77a2495cdae842dbb573795774e95e31",
  "placement": 29,
  "time_alive": 276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "52b877c93911417c8f3c9329c4e61a23:6f01cd693ace4bdca6409b6cf8f1d5b3:77a2495cdae842dbb573795774e95e31",
  "placement": 26,
  "time_alive": 574,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "1005f63e968f4d49be894228fcf3f2db:5ae94ce6ecf14a788b103fc218c9f62a:e395bde02197491a8fd34b16a11c9e20",
  "placement": 30,
  "time_alive": 320,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "1005f63e968f4d49be894228fcf3f2db:5ae94ce6ecf14a788b103fc218c9f62a:e395bde02197491a8fd34b16a11c9e20",
  "placement": 27,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "1005f63e968f4d49be894228fcf3f2db:5ae94ce6ecf14a788b103fc218c9f62a:e395bde02197491a8fd34b16a11c9e20",
  "placement": 33,
  "time_alive": 91,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "1005f63e968f4d49be894228fcf3f2db:5ae94ce6ecf14a788b103fc218c9f62a:e395bde02197491a8fd34b16a11c9e20",
  "placement": 15,
  "time_alive": 1308,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "1005f63e968f4d49be894228fcf3f2db:5ae94ce6ecf14a788b103fc218c9f62a:e395bde02197491a8fd34b16a11c9e20",
  "placement": 18,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "1005f63e968f4d49be894228fcf3f2db:5ae94ce6ecf14a788b103fc218c9f62a:e395bde02197491a8fd34b16a11c9e20",
  "placement": 24,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 14,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 21,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 22,
  "time_alive": 1083,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 25,
  "time_alive": 856,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 30,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "219011bdb6cc4182aa91507f73b742c0:a2b58a0af64e4c0cb3eb46904bbdf443:b567aa565ee84d9d86b3efb50a641097",
  "placement": 14,
  "time_alive": 1313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "09c4327dfc9d47069dfef8a26d5260e4:1a2c028cf1614c9cb862468dbac19b47:42664b0ddab14482add283c14026faea",
  "placement": 33,
  "time_alive": 67,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "09c4327dfc9d47069dfef8a26d5260e4:1a2c028cf1614c9cb862468dbac19b47:42664b0ddab14482add283c14026faea",
  "placement": 32,
  "time_alive": 89,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "09c4327dfc9d47069dfef8a26d5260e4:1a2c028cf1614c9cb862468dbac19b47:42664b0ddab14482add283c14026faea",
  "placement": 15,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "09c4327dfc9d47069dfef8a26d5260e4:1a2c028cf1614c9cb862468dbac19b47:42664b0ddab14482add283c14026faea",
  "placement": 32,
  "time_alive": 140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "09c4327dfc9d47069dfef8a26d5260e4:1a2c028cf1614c9cb862468dbac19b47:42664b0ddab14482add283c14026faea",
  "placement": 33,
  "time_alive": 72,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "09c4327dfc9d47069dfef8a26d5260e4:1a2c028cf1614c9cb862468dbac19b47:42664b0ddab14482add283c14026faea",
  "placement": 25,
  "time_alive": 694,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03feaf26-8be7-4325-9bba-4ee3c55c797d",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:8ca0cdec88a54b14b3a6589c36a06eda",
  "placement": 28,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:8ca0cdec88a54b14b3a6589c36a06eda",
  "placement": 30,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e808117-6f1e-4f1e-9311-10ba2ce68798",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:8ca0cdec88a54b14b3a6589c36a06eda",
  "placement": 20,
  "time_alive": 1110,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b629c24-6c5b-449f-ac09-a16ceefb6c98",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:8ca0cdec88a54b14b3a6589c36a06eda",
  "placement": 18,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:8ca0cdec88a54b14b3a6589c36a06eda",
  "placement": 28,
  "time_alive": 408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "68c389a8-694a-4485-895a-2d50f539682a",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:8ca0cdec88a54b14b3a6589c36a06eda",
  "placement": 19,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 2,
  "time_alive": 1489,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 2,
  "time_alive": 1514,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 8,
  "time_alive": 1328,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1445,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 3,
  "time_alive": 1445,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1431,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 11,
  "time_alive": 1370,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1514,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 19,
  "time_alive": 1258,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 5,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1460,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1425,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 3,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 10,
  "time_alive": 1455,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 1,
  "time_alive": 1380,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 4,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 10,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 11,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 8,
  "time_alive": 1438,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 5,
  "time_alive": 1489,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 20,
  "time_alive": 1219,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 2,
  "time_alive": 1445,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 14,
  "time_alive": 1323,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 14,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 12,
  "time_alive": 1350,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 13,
  "time_alive": 1350,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 3,
  "time_alive": 1376,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 8,
  "time_alive": 1358,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 12,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 8,
  "time_alive": 1383,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 5,
  "time_alive": 1454,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 3,
  "time_alive": 1501,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 4,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 25,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 22,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 2,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 6,
  "time_alive": 1447,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 25,
  "time_alive": 1050,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 6,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 3,
  "time_alive": 1420,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 13,
  "time_alive": 1337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 4,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 14,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 14,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 2,
  "time_alive": 1380,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 26,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 23,
  "time_alive": 1120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 6,
  "time_alive": 1401,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 19,
  "time_alive": 1192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 4,
  "time_alive": 1497,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 5,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 7,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 16,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 15,
  "time_alive": 1318,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 1,
  "time_alive": 1489,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 12,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 11,
  "time_alive": 1312,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 19,
  "time_alive": 1277,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 21,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 7,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "69d249f52b24459fa5a74b6bf9b780fb:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 30,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "69d249f52b24459fa5a74b6bf9b780fb:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 6,
  "time_alive": 1483,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "69d249f52b24459fa5a74b6bf9b780fb:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 9,
  "time_alive": 1327,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "69d249f52b24459fa5a74b6bf9b780fb:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 17,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "69d249f52b24459fa5a74b6bf9b780fb:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 11,
  "time_alive": 1342,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "69d249f52b24459fa5a74b6bf9b780fb:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 22,
  "time_alive": 1141,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 16,
  "time_alive": 1279,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 29,
  "time_alive": 686,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 18,
  "time_alive": 1261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 15,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 1,
  "time_alive": 1460,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 26,
  "time_alive": 392,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 4,
  "time_alive": 1466,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 15,
  "time_alive": 1327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 13,
  "time_alive": 1307,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 29,
  "time_alive": 316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 9,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 29,
  "time_alive": 261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663:f0541261c64c443882ab8109dd8b55de",
  "placement": 7,
  "time_alive": 1441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663:f0541261c64c443882ab8109dd8b55de",
  "placement": 17,
  "time_alive": 1312,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663:f0541261c64c443882ab8109dd8b55de",
  "placement": 12,
  "time_alive": 1308,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663:f0541261c64c443882ab8109dd8b55de",
  "placement": 24,
  "time_alive": 901,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663:f0541261c64c443882ab8109dd8b55de",
  "placement": 5,
  "time_alive": 1426,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663:f0541261c64c443882ab8109dd8b55de",
  "placement": 12,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 28,
  "time_alive": 883,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 9,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 17,
  "time_alive": 1270,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 11,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 4,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 18,
  "time_alive": 1267,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "105797eec03f44148748f1d00c24d2be:bcd9c321e7de40b6b6ef2d10bcabb160:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 9,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "105797eec03f44148748f1d00c24d2be:bcd9c321e7de40b6b6ef2d10bcabb160:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 18,
  "time_alive": 1290,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "105797eec03f44148748f1d00c24d2be:bcd9c321e7de40b6b6ef2d10bcabb160:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 23,
  "time_alive": 1032,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "105797eec03f44148748f1d00c24d2be:bcd9c321e7de40b6b6ef2d10bcabb160:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 30,
  "time_alive": 246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "105797eec03f44148748f1d00c24d2be:bcd9c321e7de40b6b6ef2d10bcabb160:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 6,
  "time_alive": 1393,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "105797eec03f44148748f1d00c24d2be:bcd9c321e7de40b6b6ef2d10bcabb160:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 19,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 10,
  "time_alive": 1431,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 23,
  "time_alive": 1097,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 25,
  "time_alive": 810,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 31,
  "time_alive": 240,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 27,
  "time_alive": 702,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 9,
  "time_alive": 1380,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 22,
  "time_alive": 1080,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 7,
  "time_alive": 1481,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 15,
  "time_alive": 1282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 20,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 7,
  "time_alive": 1389,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "64617ae1596b45b2a0bcdec555d41421:a047df6af8ff4e4e88a26b4d4bb4c036:b89c8cb337864f3497264c6f9be07d38",
  "placement": 17,
  "time_alive": 1303,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 20,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 8,
  "time_alive": 1463,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 7,
  "time_alive": 1333,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 12,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 25,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:51d062e0df3940b886c55e3b9240f7d4:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 20,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:55821865a6564698966b29c78f044506:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 18,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:55821865a6564698966b29c78f044506:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 20,
  "time_alive": 1113,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:55821865a6564698966b29c78f044506:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 16,
  "time_alive": 1274,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:55821865a6564698966b29c78f044506:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 14,
  "time_alive": 1340,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:55821865a6564698966b29c78f044506:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 15,
  "time_alive": 1320,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:55821865a6564698966b29c78f044506:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 10,
  "time_alive": 1371,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "0887e73a09b642ac8b814619480419b9:578a9c9f052d42ce9c34815466a09e6b:79914ff80ee04c8a9d6bd3318526bf10",
  "placement": 27,
  "time_alive": 889,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "0887e73a09b642ac8b814619480419b9:578a9c9f052d42ce9c34815466a09e6b:79914ff80ee04c8a9d6bd3318526bf10",
  "placement": 16,
  "time_alive": 1314,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "0887e73a09b642ac8b814619480419b9:578a9c9f052d42ce9c34815466a09e6b:79914ff80ee04c8a9d6bd3318526bf10",
  "placement": 10,
  "time_alive": 1322,
  "elims": 3,
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
    