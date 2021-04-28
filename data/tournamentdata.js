const axios = require('axios')
const tournaments = {
 "epicgames_S12_FNCS_Invitational_NAE_Week3": {
  "name": "epicgames_S12_FNCS_Invitational_NAE_Week3",
  "region": "NAE",
  "season": 12
 },
 "epicgames_S12_FNCS_Invitational_EU_Week3": {
  "name": "epicgames_S12_FNCS_Invitational_EU_Week3",
  "region": "EU",
  "season": 12
 },
 "epicgames_S12_FNCS_Invitational_NAW_Week3": {
  "name": "epicgames_S12_FNCS_Invitational_NAW_Week3",
  "region": "NAW",
  "season": 12
 },
 "epicgames_S12_FNCS_Invitational_ASIA_Week3": {
  "name": "epicgames_S12_FNCS_Invitational_ASIA_Week3",
  "region": "ASIA",
  "season": 12
 },
 "epicgames_S12_FNCS_Invitational_BR_Week3": {
  "name": "epicgames_S12_FNCS_Invitational_BR_Week3",
  "region": "BR",
  "season": 12
 },
 "epicgames_S12_FNCS_Invitational_ME_Week3": {
  "name": "epicgames_S12_FNCS_Invitational_ME_Week3",
  "region": "ME",
  "season": 12
 },
 "epicgames_S12_FNCS_Invitational_OCE_Week3": {
  "name": "epicgames_S12_FNCS_Invitational_OCE_Week3",
  "region": "OCE",
  "season": 12
 },
 "epicgames_S13_Dreamhack_July_NAE_Finals": {
  "name": "epicgames_S13_Dreamhack_July_NAE_Finals",
  "region": "NAE",
  "season": 13
 },
 "epicgames_S13_Dreamhack_August_NAE_Finals": {
  "name": "epicgames_S13_Dreamhack_August_NAE_Finals",
  "region": "NAE",
  "season": 13
 },
 "epicgames_S13_FNCS_NAE_Finals_PC": {
  "name": "epicgames_S13_FNCS_NAE_Finals_PC",
  "region": "NAE",
  "season": 13
 },
 "epicgames_S13_FNCS_NAE_Qualifier1_PC": {
  "name": "epicgames_S13_FNCS_NAE_Qualifier1_PC",
  "region": "NAE",
  "season": 13
 },
 "epicgames_S13_FNCS_NAE_Qualifier2_PC": {
  "name": "epicgames_S13_FNCS_NAE_Qualifier2_PC",
  "region": "NAE",
  "season": 13
 },
 "epicgames_S13_FNCS_NAE_Qualifier3_PC": {
  "name": "epicgames_S13_FNCS_NAE_Qualifier3_PC",
  "region": "NAE",
  "season": 13
 },
 "epicgames_S13_FNCS_NAE_Qualifier4_PC": {
  "name": "epicgames_S13_FNCS_NAE_Qualifier4_PC",
  "region": "NAE",
  "season": 13
 },
 "epicgames_S13_Dreamhack_July_EU_Finals": {
  "name": "epicgames_S13_Dreamhack_July_EU_Finals",
  "region": "EU",
  "season": 13
 },
 "epicgames_S13_Dreamhack_August_EU_Finals": {
  "name": "epicgames_S13_Dreamhack_August_EU_Finals",
  "region": "EU",
  "season": 13
 },
 "epicgames_S13_FNCS_EU_Finals_PC": {
  "name": "epicgames_S13_FNCS_EU_Finals_PC",
  "region": "EU",
  "season": 13
 },
 "epicgames_S13_FNCS_EU_Qualifier1_PC": {
  "name": "epicgames_S13_FNCS_EU_Qualifier1_PC",
  "region": "EU",
  "season": 13
 },
 "epicgames_S13_FNCS_EU_Qualifier2_PC": {
  "name": "epicgames_S13_FNCS_EU_Qualifier2_PC",
  "region": "EU",
  "season": 13
 },
 "epicgames_S13_FNCS_EU_Qualifier3_PC": {
  "name": "epicgames_S13_FNCS_EU_Qualifier3_PC",
  "region": "EU",
  "season": 13
 },
 "epicgames_S13_FNCS_EU_Qualifier4_PC": {
  "name": "epicgames_S13_FNCS_EU_Qualifier4_PC",
  "region": "EU",
  "season": 13
 },
 "epicgames_S13_Dreamhack_July_NAW_Finals": {
  "name": "epicgames_S13_Dreamhack_July_NAW_Finals",
  "region": "NAW",
  "season": 13
 },
 "epicgames_S13_Dreamhack_August_NAW_Finals": {
  "name": "epicgames_S13_Dreamhack_August_NAW_Finals",
  "region": "NAW",
  "season": 13
 },
 "epicgames_S13_FNCS_NAW_Finals_PC": {
  "name": "epicgames_S13_FNCS_NAW_Finals_PC",
  "region": "NAW",
  "season": 13
 },
 "epicgames_S13_FNCS_NAW_Qualifier2_PC": {
  "name": "epicgames_S13_FNCS_NAW_Qualifier2_PC",
  "region": "NAW",
  "season": 13
 },
 "epicgames_S13_FNCS_NAW_Qualifier3_PC": {
  "name": "epicgames_S13_FNCS_NAW_Qualifier3_PC",
  "region": "NAW",
  "season": 13
 },
 "epicgames_S13_FNCS_NAW_Qualifier4_PC": {
  "name": "epicgames_S13_FNCS_NAW_Qualifier4_PC",
  "region": "NAW",
  "season": 13
 },
 "epicgames_S13_FNCS_ASIA_Qualifier1_PC": {
  "name": "epicgames_S13_FNCS_ASIA_Qualifier1_PC",
  "region": "ASIA",
  "season": 13
 },
 "epicgames_S13_FNCS_ASIA_Qualifier2_PC": {
  "name": "epicgames_S13_FNCS_ASIA_Qualifier2_PC",
  "region": "ASIA",
  "season": 13
 },
 "epicgames_S13_FNCS_ASIA_Qualifier3_PC": {
  "name": "epicgames_S13_FNCS_ASIA_Qualifier3_PC",
  "region": "ASIA",
  "season": 13
 },
 "epicgames_S13_FNCS_ASIA_Qualifier4_PC": {
  "name": "epicgames_S13_FNCS_ASIA_Qualifier4_PC",
  "region": "ASIA",
  "season": 13
 },
 "epicgames_S13_FNCS_ASIA_Finals_PC": {
  "name": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "region": "ASIA",
  "season": 13
 },
 "epicgames_S13_FNCS_BR_Finals_PC": {
  "name": "epicgames_S13_FNCS_BR_Finals_PC",
  "region": "BR",
  "season": 13
 },
 "epicgames_S13_FNCS_BR_Qualifier1_PC": {
  "name": "epicgames_S13_FNCS_BR_Qualifier1_PC",
  "region": "BR",
  "season": 13
 },
 "epicgames_S13_FNCS_BR_Qualifier2_PC": {
  "name": "epicgames_S13_FNCS_BR_Qualifier2_PC",
  "region": "BR",
  "season": 13
 },
 "epicgames_S13_FNCS_BR_Qualifier3_PC": {
  "name": "epicgames_S13_FNCS_BR_Qualifier3_PC",
  "region": "BR",
  "season": 13
 },
 "epicgames_S13_FNCS_BR_Qualifier4_PC": {
  "name": "epicgames_S13_FNCS_BR_Qualifier4_PC",
  "region": "BR",
  "season": 13
 },
 "epicgames_S13_FNCS_ME_Qualifier1_PC": {
  "name": "epicgames_S13_FNCS_ME_Qualifier1_PC",
  "region": "ME",
  "season": 13
 },
 "epicgames_S13_FNCS_ME_Qualifier2_PC": {
  "name": "epicgames_S13_FNCS_ME_Qualifier2_PC",
  "region": "ME",
  "season": 13
 },
 "epicgames_S13_FNCS_ME_Qualifier3_PC": {
  "name": "epicgames_S13_FNCS_ME_Qualifier3_PC",
  "region": "ME",
  "season": 13
 },
 "epicgames_S13_FNCS_ME_Qualifier4_PC": {
  "name": "epicgames_S13_FNCS_ME_Qualifier4_PC",
  "region": "ME",
  "season": 13
 },
 "epicgames_S13_FNCS_ME_Finals_PC": {
  "name": "epicgames_S13_FNCS_ME_Finals_PC",
  "region": "ME",
  "season": 13
 },
 "epicgames_S13_FNCS_OCE_Qualifier1_PC": {
  "name": "epicgames_S13_FNCS_OCE_Qualifier1_PC",
  "region": "OCE",
  "season": 13
 },
 "epicgames_S13_FNCS_OCE_Qualifier2_PC": {
  "name": "epicgames_S13_FNCS_OCE_Qualifier2_PC",
  "region": "OCE",
  "season": 13
 },
 "epicgames_S13_FNCS_OCE_Qualifier3_PC": {
  "name": "epicgames_S13_FNCS_OCE_Qualifier3_PC",
  "region": "OCE",
  "season": 13
 },
 "epicgames_S13_FNCS_OCE_Qualifier4_PC": {
  "name": "epicgames_S13_FNCS_OCE_Qualifier4_PC",
  "region": "OCE",
  "season": 13
 },
 "epicgames_S13_FNCS_OCE_Finals_PC": {
  "name": "epicgames_S13_FNCS_OCE_Finals_PC",
  "region": "OCE",
  "season": 13
 },
 "epicgames_S14_Dreamhack_September_NAE_Finals": {
  "name": "epicgames_S14_Dreamhack_September_NAE_Finals",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_Dreamhack_October_NAE_Finals": {
  "name": "epicgames_S14_Dreamhack_October_NAE_Finals",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_Dreamhack_November_NAE_Finals": {
  "name": "epicgames_S14_Dreamhack_November_NAE_Finals",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier1_NAE_PC": {
  "name": "epicgames_S14_FNCS_Qualifier1_NAE_PC",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier2_NAE_PC": {
  "name": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier3_NAE_PC": {
  "name": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAE_PC_Heat1": {
  "name": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAE_PC_Heat2": {
  "name": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAE_PC_Heat3": {
  "name": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAE_PC_Heat4": {
  "name": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals": {
  "name": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "region": "NAE",
  "season": 14
 },
 "epicgames_S14_Dreamhack_September_EU_Finals": {
  "name": "epicgames_S14_Dreamhack_September_EU_Finals",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_Dreamhack_October_EU_Finals": {
  "name": "epicgames_S14_Dreamhack_October_EU_Finals",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_Dreamhack_November_EU_Finals": {
  "name": "epicgames_S14_Dreamhack_November_EU_Finals",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier1_EU_PC": {
  "name": "epicgames_S14_FNCS_Qualifier1_EU_PC",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier2_EU_PC": {
  "name": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier3_EU_PC": {
  "name": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_EU_PC_Heat1": {
  "name": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_EU_PC_Heat2": {
  "name": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_EU_PC_Heat3": {
  "name": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_EU_PC_Heat4": {
  "name": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals": {
  "name": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "region": "EU",
  "season": 14
 },
 "epicgames_S14_Dreamhack_September_NAW_Finals": {
  "name": "epicgames_S14_Dreamhack_September_NAW_Finals",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_Dreamhack_October_NAW_Finals": {
  "name": "epicgames_S14_Dreamhack_October_NAW_Finals",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_Dreamhack_November_NAW_Finals": {
  "name": "epicgames_S14_Dreamhack_November_NAW_Finals",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier1_NAW_PC": {
  "name": "epicgames_S14_FNCS_Qualifier1_NAW_PC",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier2_NAW_PC": {
  "name": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier3_NAW_PC": {
  "name": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAW_PC_Heat1": {
  "name": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAW_PC_Heat2": {
  "name": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAW_PC_Heat3": {
  "name": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAW_PC_Heat4": {
  "name": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals": {
  "name": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "region": "NAW",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier1_ASIA_PC": {
  "name": "epicgames_S14_FNCS_Qualifier1_ASIA_PC",
  "region": "ASIA",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier2_ASIA_PC": {
  "name": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "region": "ASIA",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier3_ASIA_PC": {
  "name": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "region": "ASIA",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1": {
  "name": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "region": "ASIA",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2": {
  "name": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "region": "ASIA",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals": {
  "name": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "region": "ASIA",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier1_BR_PC": {
  "name": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "region": "BR",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier2_BR_PC": {
  "name": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "region": "BR",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier3_BR_PC": {
  "name": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "region": "BR",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_BR_PC_Heat1": {
  "name": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "region": "BR",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_BR_PC_Heat2": {
  "name": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "region": "BR",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_BR_PC_Heat3": {
  "name": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "region": "BR",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_BR_PC_Heat4": {
  "name": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "region": "BR",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals": {
  "name": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "region": "BR",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier1_ME_PC": {
  "name": "epicgames_S14_FNCS_Qualifier1_ME_PC",
  "region": "ME",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier2_ME_PC": {
  "name": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "region": "ME",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier3_ME_PC": {
  "name": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "region": "ME",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_ME_PC_Heat1": {
  "name": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "region": "ME",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_ME_PC_Heat2": {
  "name": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "region": "ME",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals": {
  "name": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "region": "ME",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier1_OCE_PC": {
  "name": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "region": "OCE",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier2_OCE_PC": {
  "name": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "region": "OCE",
  "season": 14
 },
 "epicgames_S14_FNCS_Qualifier3_OCE_PC": {
  "name": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "region": "OCE",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_OCE_PC_Heat1": {
  "name": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "region": "OCE",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_OCE_PC_Heat2": {
  "name": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "region": "OCE",
  "season": 14
 },
 "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals": {
  "name": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "region": "OCE",
  "season": 14
 },
 "epicgames_S15_Dreamhack_December_NAE_Finals": {
  "name": "epicgames_S15_Dreamhack_December_NAE_Finals",
  "region": "NAE",
  "season": 15
 },
 "epicgames_S15_Dreamhack_January_NAE_Finals": {
  "name": "epicgames_S15_Dreamhack_January_NAE_Finals",
  "region": "NAE",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier1_NAE": {
  "name": "epicgames_S15_FNCS_Qualifier1_NAE",
  "region": "NAE",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier2_NAE": {
  "name": "epicgames_S15_FNCS_Qualifier2_NAE",
  "region": "NAE",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier3_NAE": {
  "name": "epicgames_S15_FNCS_Qualifier3_NAE",
  "region": "NAE",
  "season": 15
 },
 "epicgames_S15_FNCS_SemiFinals_NAE": {
  "name": "epicgames_S15_FNCS_SemiFinals_NAE",
  "region": "NAE",
  "season": 15
 },
 "epicgames_S15_FNCS_GrandFinals_NAE": {
  "name": "epicgames_S15_FNCS_GrandFinals_NAE",
  "region": "NAE",
  "season": 15
 },
 "epicgames_S15_FNCS_RebootRound_NAE": {
  "name": "epicgames_S15_FNCS_RebootRound_NAE",
  "region": "NAE",
  "season": 15
 },
 "epicgames_S15_Dreamhack_December_EU_Finals": {
  "name": "epicgames_S15_Dreamhack_December_EU_Finals",
  "region": "EU",
  "season": 15
 },
 "epicgames_S15_Dreamhack_January_EU_Finals": {
  "name": "epicgames_S15_Dreamhack_January_EU_Finals",
  "region": "EU",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier1_EU": {
  "name": "epicgames_S15_FNCS_Qualifier1_EU",
  "region": "EU",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier2_EU": {
  "name": "epicgames_S15_FNCS_Qualifier2_EU",
  "region": "EU",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier3_EU": {
  "name": "epicgames_S15_FNCS_Qualifier3_EU",
  "region": "EU",
  "season": 15
 },
 "epicgames_S15_FNCS_SemiFinals_EU": {
  "name": "epicgames_S15_FNCS_SemiFinals_EU",
  "region": "EU",
  "season": 15
 },
 "epicgames_S15_FNCS_GrandFinals_EU": {
  "name": "epicgames_S15_FNCS_GrandFinals_EU",
  "region": "EU",
  "season": 15
 },
 "epicgames_S15_FNCS_RebootRound_EU": {
  "name": "epicgames_S15_FNCS_RebootRound_EU",
  "region": "EU",
  "season": 15
 },
 "epicgames_S15_Dreamhack_December_NAW_Finals": {
  "name": "epicgames_S15_Dreamhack_December_NAW_Finals",
  "region": "NAW",
  "season": 15
 },
 "epicgames_S15_Dreamhack_January_NAW_Finals": {
  "name": "epicgames_S15_Dreamhack_January_NAW_Finals",
  "region": "NAW",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier1_NAW": {
  "name": "epicgames_S15_FNCS_Qualifier1_NAW",
  "region": "NAW",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier2_NAW": {
  "name": "epicgames_S15_FNCS_Qualifier2_NAW",
  "region": "NAW",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier3_NAW": {
  "name": "epicgames_S15_FNCS_Qualifier3_NAW",
  "region": "NAW",
  "season": 15
 },
 "epicgames_S15_FNCS_SemiFinals_NAW": {
  "name": "epicgames_S15_FNCS_SemiFinals_NAW",
  "region": "NAW",
  "season": 15
 },
 "epicgames_S15_FNCS_GrandFinals_NAW": {
  "name": "epicgames_S15_FNCS_GrandFinals_NAW",
  "region": "NAW",
  "season": 15
 },
 "epicgames_S15_FNCS_RebootRound_NAW": {
  "name": "epicgames_S15_FNCS_RebootRound_NAW",
  "region": "NAW",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier1_ASIA": {
  "name": "epicgames_S15_FNCS_Qualifier1_ASIA",
  "region": "ASIA",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier2_ASIA": {
  "name": "epicgames_S15_FNCS_Qualifier2_ASIA",
  "region": "ASIA",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier3_ASIA": {
  "name": "epicgames_S15_FNCS_Qualifier3_ASIA",
  "region": "ASIA",
  "season": 15
 },
 "epicgames_S15_FNCS_SemiFinals_ASIA": {
  "name": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "region": "ASIA",
  "season": 15
 },
 "epicgames_S15_FNCS_GrandFinals_ASIA": {
  "name": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "region": "ASIA",
  "season": 15
 },
 "epicgames_S15_FNCS_RebootRound_ASIA": {
  "name": "epicgames_S15_FNCS_RebootRound_ASIA",
  "region": "ASIA",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier1_BR": {
  "name": "epicgames_S15_FNCS_Qualifier1_BR",
  "region": "BR",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier2_BR": {
  "name": "epicgames_S15_FNCS_Qualifier2_BR",
  "region": "BR",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier3_BR": {
  "name": "epicgames_S15_FNCS_Qualifier3_BR",
  "region": "BR",
  "season": 15
 },
 "epicgames_S15_FNCS_SemiFinals_BR": {
  "name": "epicgames_S15_FNCS_SemiFinals_BR",
  "region": "BR",
  "season": 15
 },
 "epicgames_S15_FNCS_GrandFinals_BR": {
  "name": "epicgames_S15_FNCS_GrandFinals_BR",
  "region": "BR",
  "season": 15
 },
 "epicgames_S15_FNCS_RebootRound_BR": {
  "name": "epicgames_S15_FNCS_RebootRound_BR",
  "region": "BR",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier1_ME": {
  "name": "epicgames_S15_FNCS_Qualifier1_ME",
  "region": "ME",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier2_ME": {
  "name": "epicgames_S15_FNCS_Qualifier2_ME",
  "region": "ME",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier3_ME": {
  "name": "epicgames_S15_FNCS_Qualifier3_ME",
  "region": "ME",
  "season": 15
 },
 "epicgames_S15_FNCS_SemiFinals_ME": {
  "name": "epicgames_S15_FNCS_SemiFinals_ME",
  "region": "ME",
  "season": 15
 },
 "epicgames_S15_FNCS_GrandFinals_ME": {
  "name": "epicgames_S15_FNCS_GrandFinals_ME",
  "region": "ME",
  "season": 15
 },
 "epicgames_S15_FNCS_RebootRound_ME": {
  "name": "epicgames_S15_FNCS_RebootRound_ME",
  "region": "ME",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier1_OCE": {
  "name": "epicgames_S15_FNCS_Qualifier1_OCE",
  "region": "OCE",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier2_OCE": {
  "name": "epicgames_S15_FNCS_Qualifier2_OCE",
  "region": "OCE",
  "season": 15
 },
 "epicgames_S15_FNCS_Qualifier3_OCE": {
  "name": "epicgames_S15_FNCS_Qualifier3_OCE",
  "region": "OCE",
  "season": 15
 },
 "epicgames_S15_FNCS_SemiFinals_OCE": {
  "name": "epicgames_S15_FNCS_SemiFinals_OCE",
  "region": "OCE",
  "season": 15
 },
 "epicgames_S15_FNCS_GrandFinals_OCE": {
  "name": "epicgames_S15_FNCS_GrandFinals_OCE",
  "region": "OCE",
  "season": 15
 },
 "epicgames_S15_FNCS_RebootRound_OCE": {
  "name": "epicgames_S15_FNCS_RebootRound_OCE",
  "region": "OCE",
  "season": 15
 }
}
Object.keys(tournaments).map((tournament) => {
  axios.post('http://localhost:3000/api/tournaments', {
    tournament: {
      id: tournament,
      name: tournament,
      region: tournaments[tournament].region,
      season: tournaments[tournament].season
    }
  })
  .then(function(response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
})