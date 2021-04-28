const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 53,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 43,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 62,
  "time_alive": 1025,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 73,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 58,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 60,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 61,
  "time_alive": 1000,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 92,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 33,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 28,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 81,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 55,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 95,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 51,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 24,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "a139a14cd60b46c8bb36b6e6ea9eb04f",
  "placement": 76,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "a139a14cd60b46c8bb36b6e6ea9eb04f",
  "placement": 70,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "a139a14cd60b46c8bb36b6e6ea9eb04f",
  "placement": 93,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "a139a14cd60b46c8bb36b6e6ea9eb04f",
  "placement": 88,
  "time_alive": 534,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "a139a14cd60b46c8bb36b6e6ea9eb04f",
  "placement": 88,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "a139a14cd60b46c8bb36b6e6ea9eb04f",
  "placement": 16,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 57,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 66,
  "time_alive": 1100,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 98,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 29,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 80,
  "time_alive": 766,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 45,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 98,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 96,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 67,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 47,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 30,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 46,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 69,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 42,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 84,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 84,
  "time_alive": 665,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 95,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 65,
  "time_alive": 878,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "3c6f86a9dbe346e5874cbec4e274a504",
  "placement": 48,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "3c6f86a9dbe346e5874cbec4e274a504",
  "placement": 41,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "3c6f86a9dbe346e5874cbec4e274a504",
  "placement": 75,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "3c6f86a9dbe346e5874cbec4e274a504",
  "placement": 87,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "3c6f86a9dbe346e5874cbec4e274a504",
  "placement": 56,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "3c6f86a9dbe346e5874cbec4e274a504",
  "placement": 71,
  "time_alive": 834,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 71,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 95,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 20,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 69,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 94,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 72,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 74,
  "time_alive": 886,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 82,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 90,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 71,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 85,
  "time_alive": 500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 87,
  "time_alive": 322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 97,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 78,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 37,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 94,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 74,
  "time_alive": 847,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 96,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 82,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 67,
  "time_alive": 1096,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 48,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 89,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 41,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 86,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 61,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 33,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 64,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 96,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 60,
  "time_alive": 1062,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 79,
  "time_alive": 577,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "e5d822ce4e844915991357d34cb0d901",
  "placement": 96,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "e5d822ce4e844915991357d34cb0d901",
  "placement": 94,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "e5d822ce4e844915991357d34cb0d901",
  "placement": 63,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "e5d822ce4e844915991357d34cb0d901",
  "placement": 18,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "e5d822ce4e844915991357d34cb0d901",
  "placement": 90,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "e5d822ce4e844915991357d34cb0d901",
  "placement": 93,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "7043c1bdd15445109535e5cd6aebfcc3",
  "placement": 50,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "7043c1bdd15445109535e5cd6aebfcc3",
  "placement": 81,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "7043c1bdd15445109535e5cd6aebfcc3",
  "placement": 96,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "7043c1bdd15445109535e5cd6aebfcc3",
  "placement": 78,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "7043c1bdd15445109535e5cd6aebfcc3",
  "placement": 68,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "7043c1bdd15445109535e5cd6aebfcc3",
  "placement": 92,
  "time_alive": 208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 66,
  "time_alive": 955,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 54,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 32,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 95,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 70,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 81,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 54,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 74,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 82,
  "time_alive": 698,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 76,
  "time_alive": 840,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 72,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 99,
  "time_alive": 81,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "3957bfe87b9e4a48a6106ccd95d66f52",
  "placement": 89,
  "time_alive": 576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "3957bfe87b9e4a48a6106ccd95d66f52",
  "placement": 58,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "3957bfe87b9e4a48a6106ccd95d66f52",
  "placement": 87,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "3957bfe87b9e4a48a6106ccd95d66f52",
  "placement": 48,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "3957bfe87b9e4a48a6106ccd95d66f52",
  "placement": 75,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "3957bfe87b9e4a48a6106ccd95d66f52",
  "placement": 78,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 92,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 91,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 73,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 83,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 76,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 51,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "12d40f1284c84b6bb5d1225365c586de",
  "placement": 79,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "12d40f1284c84b6bb5d1225365c586de",
  "placement": 88,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "12d40f1284c84b6bb5d1225365c586de",
  "placement": 83,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "12d40f1284c84b6bb5d1225365c586de",
  "placement": 100,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "12d40f1284c84b6bb5d1225365c586de",
  "placement": 99,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "12d40f1284c84b6bb5d1225365c586de",
  "placement": 63,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 99,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 99,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 58,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 93,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 97,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 26,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 3,
  "time_alive": 1543,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 14,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 19,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 1,
  "time_alive": 1543,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 23,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 3,
  "time_alive": 1525,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 52,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 99,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 1,
  "time_alive": 1548,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 29,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 6,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 12,
  "time_alive": 1483,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 8,
  "time_alive": 1450,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 45,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 2,
  "time_alive": 1548,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 14,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 16,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 11,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 7,
  "time_alive": 1460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 2,
  "time_alive": 1538,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 10,
  "time_alive": 1461,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 64,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 12,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 46,
  "time_alive": 1292,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 2,
  "time_alive": 1551,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 3,
  "time_alive": 1517,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 14,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 43,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "e052da67f88046d295b36cdfc4231cb5",
  "placement": 60,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 41,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 19,
  "time_alive": 1405,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 10,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 33,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 3,
  "time_alive": 1519,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 38,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 38,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 5,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 46,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 67,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 24,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 2,
  "time_alive": 1528,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 59,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 16,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 41,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 15,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 25,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 8,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 13,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 13,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 39,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 30,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 4,
  "time_alive": 1507,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 35,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 6,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 42,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 7,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 68,
  "time_alive": 949,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 10,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 31,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 7,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 40,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 32,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 12,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 53,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 29,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 9,
  "time_alive": 1487,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 23,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 9,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 86,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 75,
  "time_alive": 597,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 21,
  "time_alive": 1424,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 44,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 6,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 54,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 20,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 15,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 22,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 24,
  "time_alive": 1415,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 1,
  "time_alive": 1551,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 65,
  "time_alive": 1015,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 40,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 39,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 37,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 37,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 35,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 59,
  "time_alive": 1087,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 4,
  "time_alive": 1511,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 81,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 5,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 10,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 63,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 4,
  "time_alive": 1509,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 62,
  "time_alive": 1012,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 82,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 11,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 5,
  "time_alive": 1510,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 77,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 69,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 27,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 13,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 25,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 17,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 34,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 17,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 23,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 33,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 28,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 34,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 20,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 52,
  "time_alive": 1158,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 9,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 34,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 53,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 95,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 93,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 12,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 5,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 6,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 47,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 81,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 97,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 1,
  "time_alive": 1538,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 52,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 22,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 49,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 50,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 41,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 6,
  "time_alive": 1489,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 97,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 2,
  "time_alive": 1543,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 82,
  "time_alive": 419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 47,
  "time_alive": 1262,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 48,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 29,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 31,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 17,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 14,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 31,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 32,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 27,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 82,
  "time_alive": 792,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 12,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1523,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 35,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 27,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 19,
  "time_alive": 1415,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 45,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 41,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 63,
  "time_alive": 713,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 55,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 81,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 5,
  "time_alive": 1500,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 13,
  "time_alive": 1450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 26,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 34,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 100,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 10,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 26,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 69,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 7,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 26,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 1,
  "time_alive": 1548,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 86,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 57,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 76,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 48,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 17,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 33,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 50,
  "time_alive": 1216,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 92,
  "time_alive": 262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 21,
  "time_alive": 1429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 57,
  "time_alive": 1184,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 13,
  "time_alive": 1450,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 14,
  "time_alive": 1471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 70,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 28,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 26,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 23,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 30,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 16,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 9,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 56,
  "time_alive": 1100,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 44,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 79,
  "time_alive": 490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 90,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 15,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 53,
  "time_alive": 1188,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 66,
  "time_alive": 1009,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 22,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 31,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 36,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 48,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 39,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 24,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 98,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 5,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 57,
  "time_alive": 1014,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 51,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 11,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 34,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 38,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 62,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 7,
  "time_alive": 1483,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 52,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 4,
  "time_alive": 1515,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 18,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 41,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 16,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 44,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 8,
  "time_alive": 1487,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 82,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 35,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 18,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 78,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 85,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 40,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 71,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 11,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 28,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 42,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 62,
  "time_alive": 810,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 86,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 12,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 8,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 50,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 86,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 51,
  "time_alive": 1199,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 74,
  "time_alive": 866,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 22,
  "time_alive": 1393,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 30,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 34,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 21,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 55,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 78,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 21,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 73,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 6,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 54,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 24,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 66,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 54,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 50,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 8,
  "time_alive": 1481,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 85,
  "time_alive": 396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 19,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 45,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 94,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 16,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 74,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 50,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 9,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 36,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 65,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 74,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 89,
  "time_alive": 499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 30,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 3,
  "time_alive": 1527,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 49,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 18,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 100,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 96,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 8,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 91,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 89,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 92,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 15,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 16,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 60,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "b5289d53fd3b47edb3a5569b7eecb664",
  "placement": 32,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 62,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 24,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 22,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 35,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 32,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 67,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 23,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 98,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 25,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 51,
  "time_alive": 1225,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 96,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 15,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 21,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 87,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 75,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 3,
  "time_alive": 1546,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 36,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 65,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 29,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 15,
  "time_alive": 1412,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 94,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 64,
  "time_alive": 995,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 66,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 39,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 57,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 68,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 71,
  "time_alive": 939,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 93,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 76,
  "time_alive": 588,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 1,
  "time_alive": 1528,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 19,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 40,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 99,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 94,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 10,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 4,
  "time_alive": 1513,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 85,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 43,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 42,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 40,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 70,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 30,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 49,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 53,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 85,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 20,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 45,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 58,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 14,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 21,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 80,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 47,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 72,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 20,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 26,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 42,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 48,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 84,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 66,
  "time_alive": 664,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 25,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 55,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 37,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 24,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 67,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 75,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 54,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 91,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 38,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 11,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 52,
  "time_alive": 1226,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 86,
  "time_alive": 362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 2,
  "time_alive": 1548,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 64,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 63,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 57,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 77,
  "time_alive": 587,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 81,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 83,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 30,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 90,
  "time_alive": 391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 17,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 46,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 40,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 64,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 38,
  "time_alive": 1340,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 68,
  "time_alive": 992,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 25,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 80,
  "time_alive": 482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 69,
  "time_alive": 643,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 99,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 74,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 23,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 91,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 11,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 88,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 67,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 58,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 20,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 53,
  "time_alive": 1193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 35,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 48,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 77,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 43,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 51,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 7,
  "time_alive": 1483,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 49,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 71,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 88,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 17,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 47,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 90,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 27,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 42,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 63,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 25,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 93,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 73,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 58,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 18,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 53,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 46,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 76,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 29,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 9,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 92,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 42,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 29,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 31,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 79,
  "time_alive": 800,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 69,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 50,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 39,
  "time_alive": 1328,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 90,
  "time_alive": 197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 81,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 70,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 65,
  "time_alive": 1078,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 43,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 72,
  "time_alive": 906,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 37,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 97,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 65,
  "time_alive": 963,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 92,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 64,
  "time_alive": 691,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 27,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 73,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 67,
  "time_alive": 997,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 54,
  "time_alive": 1143,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 71,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 97,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 75,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 67,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 61,
  "time_alive": 1083,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 71,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 37,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 58,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 60,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 99,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 88,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 83,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 19,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 41,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 98,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 51,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 13,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 61,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 59,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 77,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 68,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 28,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 91,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 36,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 44,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 68,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 56,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 57,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 72,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 59,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 72,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 33,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 32,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 66,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 44,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 78,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 45,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 59,
  "time_alive": 913,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 22,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 78,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 62,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 37,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 55,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 78,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 79,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 95,
  "time_alive": 148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 36,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 49,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 61,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 73,
  "time_alive": 560,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 28,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 45,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 58,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 81,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 70,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 43,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 84,
  "time_alive": 372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 83,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 75,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 18,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 95,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 84,
  "time_alive": 566,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 31,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 80,
  "time_alive": 707,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 55,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 88,
  "time_alive": 322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 80,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 87,
  "time_alive": 477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 56,
  "time_alive": 1160,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 64,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 32,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 52,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "a4dbfee093be442a9c0026cdadd9296d",
  "placement": 94,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "a4dbfee093be442a9c0026cdadd9296d",
  "placement": 60,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "a4dbfee093be442a9c0026cdadd9296d",
  "placement": 98,
  "time_alive": 120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "a4dbfee093be442a9c0026cdadd9296d",
  "placement": 77,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "a4dbfee093be442a9c0026cdadd9296d",
  "placement": 97,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "a4dbfee093be442a9c0026cdadd9296d",
  "placement": 20,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 70,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 59,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 87,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 66,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 28,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 46,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 18,
  "time_alive": 1459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 61,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 60,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 84,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 68,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 89,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 96,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 33,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 82,
  "time_alive": 687,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 95,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 51,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 54,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 61,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 47,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 48,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 63,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 93,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 79,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 69,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 80,
  "time_alive": 739,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 85,
  "time_alive": 534,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 60,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 89,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 27,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 76,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 72,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 49,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 47,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 74,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 93,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "587811260118410298ccba23fb87d9a2",
  "placement": 85,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "587811260118410298ccba23fb87d9a2",
  "placement": 44,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "587811260118410298ccba23fb87d9a2",
  "placement": 84,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "587811260118410298ccba23fb87d9a2",
  "placement": 43,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "587811260118410298ccba23fb87d9a2",
  "placement": 56,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 92,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 36,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 55,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 88,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 87,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 94,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 73,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 89,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 86,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 39,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 98,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 83,
  "time_alive": 417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 82,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 88,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 33,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 58,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 73,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 80,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 96,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 77,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 72,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 38,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 74,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 91,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 69,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 89,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 46,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 95,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 96,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 93,
  "time_alive": 386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 75,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 78,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 56,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 56,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 84,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 65,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 79,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 70,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 94,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 63,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 87,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 71,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 62,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 96,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 87,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 91,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 61,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 90,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 83,
  "time_alive": 557,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 79,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 83,
  "time_alive": 445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067be990-ef49-4bc4-b48e-bd72a7a81789",
  "team_id": "d6671272ddff4806bbe8087200039647",
  "placement": 97,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03173965-6614-4241-87de-fc605cd9820c",
  "team_id": "d6671272ddff4806bbe8087200039647",
  "placement": 76,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4",
  "team_id": "d6671272ddff4806bbe8087200039647",
  "placement": 95,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02ecff28-0d69-44b4-9569-db6a6881bf6a",
  "team_id": "d6671272ddff4806bbe8087200039647",
  "placement": 92,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9",
  "team_id": "d6671272ddff4806bbe8087200039647",
  "placement": 90,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2",
  "team_id": "d6671272ddff4806bbe8087200039647",
  "placement": 76,
  "time_alive": 517,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 14,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 20,
  "time_alive": 1398,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 6,
  "time_alive": 1489,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 40,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 21,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 1,
  "time_alive": 1501,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 15,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 60,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 4,
  "time_alive": 1505,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 9,
  "time_alive": 1481,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 11,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 14,
  "time_alive": 1438,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 7,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 53,
  "time_alive": 1136,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 1,
  "time_alive": 1519,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 65,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 8,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 63,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 2,
  "time_alive": 1525,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 10,
  "time_alive": 1462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 29,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 36,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 50,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 12,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 1,
  "time_alive": 1525,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 28,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 23,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 45,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 32,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 46,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 75,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 82,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 11,
  "time_alive": 1460,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 2,
  "time_alive": 1526,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 19,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 53,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 11,
  "time_alive": 1468,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 19,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 73,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 5,
  "time_alive": 1499,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 81,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 22,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 13,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 47,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 48,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 4,
  "time_alive": 1515,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 5,
  "time_alive": 1502,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 71,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 8,
  "time_alive": 1485,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 98,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 40,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 49,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 45,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "b975205279d84a75983c03301d24754c",
  "placement": 2,
  "time_alive": 1501,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 37,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 91,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 14,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 1,
  "time_alive": 1526,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 56,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 31,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 12,
  "time_alive": 1466,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 4,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 37,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 20,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 36,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 54,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 25,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 42,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 31,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 23,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 14,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 5,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 86,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 36,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 16,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 79,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 2,
  "time_alive": 1533,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 62,
  "time_alive": 907,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 3,
  "time_alive": 1523,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 97,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 2,
  "time_alive": 1519,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 90,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 71,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "eb53ec01a5a4496d94d5950068d82016",
  "placement": 60,
  "time_alive": 975,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 10,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 11,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 49,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 54,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 28,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 36,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 68,
  "time_alive": 1028,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 35,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 3,
  "time_alive": 1516,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 16,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 16,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 89,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 4,
  "time_alive": 1515,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 89,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 75,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 38,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 6,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 23,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 46,
  "time_alive": 1278,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 41,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 59,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 3,
  "time_alive": 1517,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 10,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 26,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 34,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 37,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 43,
  "time_alive": 1333,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 7,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 39,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 20,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 33,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 6,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 70,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 39,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 13,
  "time_alive": 1445,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 92,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 96,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 5,
  "time_alive": 1490,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 25,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 86,
  "time_alive": 450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 82,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "27c43395c63647c285538584110c6d7f",
  "placement": 10,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 9,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 24,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 72,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 19,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 60,
  "time_alive": 1126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 27,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 87,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 3,
  "time_alive": 1506,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 79,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 18,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 65,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 8,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 44,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 46,
  "time_alive": 1251,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 10,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 53,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 24,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 32,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 38,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 2,
  "time_alive": 1519,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 64,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 83,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 90,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 18,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 65,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 32,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 13,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 22,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 20,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 73,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 22,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 1,
  "time_alive": 1519,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 35,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 75,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 75,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 55,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "fa9f765b684846acb441e75284017468",
  "placement": 36,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "fa9f765b684846acb441e75284017468",
  "placement": 26,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "fa9f765b684846acb441e75284017468",
  "placement": 47,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "fa9f765b684846acb441e75284017468",
  "placement": 61,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "fa9f765b684846acb441e75284017468",
  "placement": 9,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "fa9f765b684846acb441e75284017468",
  "placement": 21,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 28,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 30,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 38,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 52,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 4,
  "time_alive": 1503,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 40,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 23,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 66,
  "time_alive": 956,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 9,
  "time_alive": 1479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 69,
  "time_alive": 933,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 79,
  "time_alive": 675,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8",
  "placement": 3,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 35,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 96,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 7,
  "time_alive": 1484,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 32,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 64,
  "time_alive": 1078,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 83,
  "time_alive": 268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 49,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 7,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 27,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 17,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 59,
  "time_alive": 1149,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 49,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 47,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 31,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 82,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 21,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 30,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 4,
  "time_alive": 1485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 5,
  "time_alive": 1515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 16,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 68,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 70,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 78,
  "time_alive": 681,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 15,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "7d24989de6264de09b332b204e1319ec",
  "placement": 20,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "7d24989de6264de09b332b204e1319ec",
  "placement": 95,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "7d24989de6264de09b332b204e1319ec",
  "placement": 86,
  "time_alive": 637,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "7d24989de6264de09b332b204e1319ec",
  "placement": 43,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "7d24989de6264de09b332b204e1319ec",
  "placement": 1,
  "time_alive": 1533,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "7d24989de6264de09b332b204e1319ec",
  "placement": 87,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 59,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 18,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 21,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 73,
  "time_alive": 909,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 83,
  "time_alive": 551,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 7,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "7fc79e62144146a4902c8841b04a1429",
  "placement": 81,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "7fc79e62144146a4902c8841b04a1429",
  "placement": 12,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "7fc79e62144146a4902c8841b04a1429",
  "placement": 51,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "7fc79e62144146a4902c8841b04a1429",
  "placement": 11,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "7fc79e62144146a4902c8841b04a1429",
  "placement": 29,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "7fc79e62144146a4902c8841b04a1429",
  "placement": 16,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 41,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 80,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 65,
  "time_alive": 1051,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 14,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 42,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 9,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 69,
  "time_alive": 992,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 87,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 90,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 6,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 17,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 34,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 79,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 43,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 5,
  "time_alive": 1493,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 31,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 85,
  "time_alive": 400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 17,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c",
  "placement": 16,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c",
  "placement": 65,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c",
  "placement": 36,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c",
  "placement": 67,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c",
  "placement": 43,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c",
  "placement": 6,
  "time_alive": 1474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 19,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 40,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 67,
  "time_alive": 943,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 13,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 94,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 74,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 50,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 22,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 8,
  "time_alive": 1482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 88,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 18,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 91,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 82,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 33,
  "time_alive": 1317,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 83,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 71,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 77,
  "time_alive": 685,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 11,
  "time_alive": 1442,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 24,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 70,
  "time_alive": 885,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 63,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 62,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 22,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 47,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 67,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 81,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 34,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 57,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 7,
  "time_alive": 1496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 30,
  "time_alive": 1373,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 98,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 57,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 17,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 30,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 92,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "dfbe77d1d5df44e48ca229b0ce977a55",
  "placement": 13,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 89,
  "time_alive": 585,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 85,
  "time_alive": 766,
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
    