// 48隊靜態資料，來源：weighting table
export const TEAMS = [
  { teamId:"MEX", name:"Mexico",       nameCht:"墨西哥",       group:"A", rank:15, weighting:2 },
  { teamId:"CZE", name:"Czech Republic",nameCht:"捷克",        group:"A", rank:28, weighting:3 },
  { teamId:"KOR", name:"South Korea",  nameCht:"南韓",         group:"A", rank:33, weighting:3 },
  { teamId:"RSA", name:"South Africa", nameCht:"南非",         group:"A", rank:38, weighting:4 },
  { teamId:"SUI", name:"Switzerland",  nameCht:"瑞士",         group:"B", rank:17, weighting:2 },
  { teamId:"CAN", name:"Canada",       nameCht:"加拿大",       group:"B", rank:24, weighting:2 },
  { teamId:"BIH", name:"Bosnia",       nameCht:"波赫",         group:"B", rank:26, weighting:3 },
  { teamId:"QAT", name:"Qatar",        nameCht:"卡達",         group:"B", rank:39, weighting:4 },
  { teamId:"BRA", name:"Brazil",       nameCht:"巴西",         group:"C", rank:4,  weighting:1 },
  { teamId:"MAR", name:"Morocco",      nameCht:"摩洛哥",       group:"C", rank:13, weighting:2 },
  { teamId:"SCO", name:"Scotland",     nameCht:"蘇格蘭",       group:"C", rank:27, weighting:3 },
  { teamId:"HAI", name:"Haiti",        nameCht:"海地",         group:"C", rank:48, weighting:4 },
  { teamId:"USA", name:"USA",          nameCht:"美國",         group:"D", rank:12, weighting:1 },
  { teamId:"TUR", name:"Turkey",       nameCht:"土耳其",       group:"D", rank:18, weighting:2 },
  { teamId:"PAR", name:"Paraguay",     nameCht:"巴拉圭",       group:"D", rank:25, weighting:3 },
  { teamId:"AUS", name:"Australia",    nameCht:"澳洲",         group:"D", rank:34, weighting:3 },
  { teamId:"GER", name:"Germany",      nameCht:"德國",         group:"E", rank:7,  weighting:1 },
  { teamId:"ECU", name:"Ecuador",      nameCht:"厄瓜多",       group:"E", rank:19, weighting:2 },
  { teamId:"CIV", name:"Ivory Coast",  nameCht:"象牙海岸",     group:"E", rank:29, weighting:3 },
  { teamId:"CUW", name:"Curacao",      nameCht:"庫拉索",       group:"E", rank:46, weighting:4 },
  { teamId:"NED", name:"Netherlands",  nameCht:"荷蘭",         group:"F", rank:8,  weighting:1 },
  { teamId:"JPN", name:"Japan",        nameCht:"日本",         group:"F", rank:14, weighting:2 },
  { teamId:"SWE", name:"Sweden",       nameCht:"瑞典",         group:"F", rank:22, weighting:2 },
  { teamId:"TUN", name:"Tunisia",      nameCht:"突尼西亞",     group:"F", rank:35, weighting:3 },
  { teamId:"BEL", name:"Belgium",      nameCht:"比利時",       group:"G", rank:10, weighting:1 },
  { teamId:"EGY", name:"Egypt",        nameCht:"埃及",         group:"G", rank:30, weighting:3 },
  { teamId:"IRN", name:"Iran",         nameCht:"伊朗",         group:"G", rank:36, weighting:3 },
  { teamId:"NZL", name:"New Zealand",  nameCht:"紐西蘭",       group:"G", rank:43, weighting:4 },
  { teamId:"ESP", name:"Spain",        nameCht:"西班牙",       group:"H", rank:1,  weighting:1 },
  { teamId:"URU", name:"Uruguay",      nameCht:"烏拉圭",       group:"H", rank:16, weighting:2 },
  { teamId:"KSA", name:"Saudi Arabia", nameCht:"沙烏地阿拉伯", group:"H", rank:40, weighting:4 },
  { teamId:"CPV", name:"Cape Verde",   nameCht:"維德角",       group:"H", rank:44, weighting:4 },
  { teamId:"FRA", name:"France",       nameCht:"法國",         group:"I", rank:2,  weighting:1 },
  { teamId:"NOR", name:"Norway",       nameCht:"挪威",         group:"I", rank:9,  weighting:1 },
  { teamId:"SEN", name:"Senegal",      nameCht:"塞內加爾",     group:"I", rank:21, weighting:2 },
  { teamId:"IRQ", name:"Iraq",         nameCht:"伊拉克",       group:"I", rank:41, weighting:4 },
  { teamId:"ARG", name:"Argentina",    nameCht:"阿根廷",       group:"J", rank:5,  weighting:1 },
  { teamId:"AUT", name:"Austria",      nameCht:"奧地利",       group:"J", rank:23, weighting:2 },
  { teamId:"ALG", name:"Algeria",      nameCht:"阿爾及利亞",   group:"J", rank:31, weighting:3 },
  { teamId:"JOR", name:"Jordan",       nameCht:"約旦",         group:"J", rank:47, weighting:4 },
  { teamId:"POR", name:"Portugal",     nameCht:"葡萄牙",       group:"K", rank:6,  weighting:1 },
  { teamId:"COL", name:"Colombia",     nameCht:"哥倫比亞",     group:"K", rank:11, weighting:1 },
  { teamId:"COD", name:"DR Congo",     nameCht:"剛果民主共和國",group:"K", rank:37, weighting:4 },
  { teamId:"UZB", name:"Uzbekistan",   nameCht:"烏茲別克",     group:"K", rank:45, weighting:4 },
  { teamId:"ENG", name:"England",      nameCht:"英格蘭",       group:"L", rank:3,  weighting:1 },
  { teamId:"CRO", name:"Croatia",      nameCht:"克羅埃西亞",   group:"L", rank:20, weighting:2 },
  { teamId:"GHA", name:"Ghana",        nameCht:"迦納",         group:"L", rank:32, weighting:3 },
  { teamId:"PAN", name:"Panama",       nameCht:"巴拿馬",       group:"L", rank:42, weighting:4 },
];

// 依分組取得隊伍
export function getTeamsByGroup(group) {
  return TEAMS.filter(t => t.group === group);
}

// 依 teamId 取得隊伍資料
export function getTeamById(teamId) {
  return TEAMS.find(t => t.teamId === teamId);
}

// 所有分組
export const GROUPS = ["A","B","C","D","E","F","G","H","I","J","K","L"];