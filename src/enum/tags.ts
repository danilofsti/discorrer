import { SET_RUN_TYPE, SET_RUN_WHERE, SET_RUN_PRE, SET_RUN_DURING, SET_RUN_POST } from "../redux/actions"

export const TAGS = {
  run: {
    id:"run",
    icon:"running",
    name:"Regenerativa"
  },
  speed:{
    id:"speed",
    icon:"stopwatch",
    name:"Velocidade"
  },
  long:{
    id:"long",
    icon:"map",
    name:"Longão"
  },
  race:{
    id:"race",
    icon:"flag-checkered",
    name:"Prova"
  },
  trail:{
    id:"trail",
    icon:"hiking",
    name:"Trilha"
  },
  street:{
    id:"street",
    icon:"route",
    name:"Rua"
  },
  inside:{
    id:"inside",
    icon:"skiing-nordic",
    name:"Esteira"
  },
  track:{
    id:"track",
    icon:"road",
    name:"Track"
  },
  goodsleep: {
    id:"goodsleep",
    icon:"bed",
    name:"Bom Sono"
  },
  badsleep: {
    id:"badsleep",
    icon:"procedures",
    name:"Mal Sono"
  },
  meditation: {
    id:"meditation",
    icon:"spa",
    name: "Meditou"
  },
  work: {
    id:"work",
    icon:"building",
    name:"Trabalhou"
  },
  health:{
    id:"health",
    icon:"utensils",
    name:"Comida Saudável"
  },
  fastfood:{
    id:"fastfood",
    icon:"pizza-slice",
    name:"Fastfood"
  },
  carb:{
    id:"carb",
    icon:"bread-slice",
    name:"Carb Load"
  },
  friend:{
    id:"friend",
    icon:"user-friends",
    name:"Viu Amigos"
  },
  love:{
    id:"love",
    icon:"grin-hearts",
    name:"Namorou"
  },
  sick:{
    id:"sick",
    icon:"virus",
    name:"Doente"
  },
  fisio:{
    id:"fisio",
    icon:"medkit",
    name:"Fisioterapia"
  },
  gyn: {
    id:"gyn",
    icon:"dumbbell",
    name:"Academia"
  },
  sad: {
    id:"sad",
    icon:"sad-cry",
    name:"Triste"
  },
  stress: {
    id:"stress",
    icon:"grimace",
    name:"Estressado"
  },
  happy: {
    id:"happy",
    icon:"laugh",
    name:"Alegre"
  },
  tired: {
    id:"tired",
    icon:"tired",
    name:"Exausto"
  },
  energic: {
    id:"energic",
    icon:"grin-stars",
    name:"Enérgico"
  },
  solo:{
    id:"solo",
    icon:"user",
    name:"Sozinho"
  },
  group:{
    id:"group",
    icon:"users",
    name:"Em Grupo"
  },
  park:{
    id:"park",
    icon:"tree",
    name:"Parque"
  },
  city:{
    id:"city",
    icon:"city",
    name:"Cidade"
  },
  sun:{
    id:"sun",
    icon:"sun",
    name: "Quente"
  },
  cold:{
    id:"cold",
    icon:"snowflake",
    name: "Frio"
  },
  wind:{
    id:"wind",
    icon:"wind",
    name: "Vento Forte"
  },
  nice:{
    id: "nice",
    icon: "cloud",
    name: "Clima Agradavel"
  },
  music:{
    id: "music",
    icon: "music",
    name: "Música"
  },
  guided:{
    id: "guided",
    icon: "headphones",
    name: "Guiada"
  },
  indoor:{
    id: "indoor",
    icon: "home",
    name: "Interna"
  },
  pain:{
    id: "pain",
    icon: "diagnoses",
    name: "Dores"
  },
  tshirt:{
    id: "tshirt",
    icon: "tshirt",
    name: "Roupa Adequada"
  },
  shoes:{
    id: "shoes",
    icon: "shoe-prints",
    name: "Tenis Confortavel"
  }
}

export const TYPE= [
  "run"
  ,"speed"
  ,"long"
  ,"race"
]
export const WHERE= [
  "trail"
  ,"street"
  ,"inside"
  ,"track"
]
export const PRE= [
  "goodsleep","badsleep","meditation","work",
  "health", "fastfood", "carb", "love",
  "friend", "sick", "fisio", "gyn", 
  "sad", "happy", "stress", "tired", 
  "energic"
]
export const DURING= [
  "solo", "group", "park","city", "sun", "wind", "cold",  "nice", "music", "guided", "indoor", "tshirt", "shoes", "pain"
]
export const POST= [
  "trail"
  ,"street"
  ,"inside"
  ,"track"
]

export const TAG_LIST = [
  {
    title: "... o tipo do treino?",
    isMulti: false,
    listSize:2,
    type: SET_RUN_TYPE,
    name: 'type',
    list: TYPE
  },
  {
    title:"... o terreno onde correu?",
    isMulti: false,
    listSize:3,
    type: SET_RUN_WHERE,
    name: 'where',
    list: WHERE
  },
  {
    title:"... seu dia antes do treino?",
    isMulti: true,
    listSize:2,
    type: SET_RUN_PRE,
    name: 'pre',
    list: PRE
  },
  {
    title:"... durante a corrida?",
    isMulti: true,
    listSize:2,
    type: SET_RUN_DURING, 
    name: 'during',
    list: DURING
  },
  {
    title:"... o restante do dia?",
    isMulti: true,
    listSize:3,
    type: SET_RUN_POST,
    name: 'post',
    list: POST
  }
]