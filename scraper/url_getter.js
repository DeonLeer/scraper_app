export default function UrlGetter() {
  const urlStart = 'https://fortnitetracker.com/events/epicgames_'
  const regions = ['NAE', 'EU', 'NAW', 'BR', 'OCE', 'ASIA', 'ME']
  const seasons = [12, 13, 14, 15]
  const dreamhackS13 = ['July', 'August']
  const dreamhackS14 = ['September', 'October', 'November']
  const dreamhackS15 = ['December', 'January']

  const urls = {}

  for (let season of seasons) {
    let urlObject = {}

    switch(season){
      case 12:
        for (let region of regions) {
          urlObject[region] = `${urlStart}S12_FNCS_Invitational_${region}_Week3`
        }
        break;
      case 13:
        for (let region of regions) {
          urlObject[region] = {}
          if (region === "NAE" || region === "NAW" || region === "EU") {
            urlObject[region]['dreamhack'] = {}
            for (let dreamhack in dreamhackS13) {
              urlObject[region]['dreamhack'][dreamhack] = `${urlStart}S13_Dreamhack_${dreamhack}_${region}_Finals`
            }
          }
          for (let i = 1; i <= 4; i++) {
            urlObject[region][`Qualifier${i}`] = `${urlStart}S13_FNCS_${region}_Qualifier${i}_PC`
            urlObject[region][`Heat${i}`] = `${urlStart}S13_FNCS_${region}_Finals_PC?window=S13_FNCS_${region}_Finals_PC_Heat${i}`
          }
          urlObject[region]['GrandFinals'] = `${urlStart}S13_FNCS_${region}_Finals_PC`
        }
        break;
      case 14:
        for (let region of regions) {
          urlObject[region] = {}
          if (region === "NAE" || region === "NAW" || region === "EU") {
            urlObject[region]['dreamhack'] = {}
            for (let dreamhack in dreamhackS14) {
              urlObject[region]['dreamhack'][dreamhack] = `${urlStart}S14_Dreamhack_${dreamhack}_${region}_Finals`
            }
          }
          for (let i = 1; i <= 3; i++) {
            urlObject[region][`Qualifier${i}`] = `${urlStart}S14_FNCS_Qualifier${i}_${region}_PC`
          }
          for (let i = 1; i <= 4; i++) {
            urlObject[region][`Heat${i}`] = `${urlStart}S14_FNCS_Finals${region}_PC_Heat${i}?window=S14_FNCS_Finals${region}_PC_Heat${i}_Event1`
          }
          urlObject[region][`GrandFinals`] = `${urlStart}S14_FNCS_Finals_${region}_PC_GrandFinals`
        }
        break;
      case 15:
        for (let region of regions) {
          urlObject[region] = {}
          if (region === "NAE" || region === "NAW" || region === "EU") {
            urlObject[region]['dreamhack'] = {}
            for (let dreamhack in dreamhackS15) {
              urlObject[region]['dreamhack'][dreamhack] = `${urlStart}S15_Dreamhack_${dreamhack}_${region}_Finals`
            }
          }
          for (let i = 1; i <= 3; i++) {
            urlObject[region][`Qualifier${i}`] = `${urlStart}S15_FNCS_Qualifier${i}_${region}`
          }
          urlObject[region][`SemiFinals`] = `${urlStart}S15_FNCS_SemiFinals_${region}`
          urlObject[region][`GrandFinals`] = `${urlStart}S15_FNCS_GrandFinals_${region}`
        }
        break;
      case 16:
        break;
      default:
    }
    urls[season] = urlObject
  }
  return urls
}




