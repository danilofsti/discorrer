import { SET_RUN_TYPE, SET_RUN_WHERE, SET_RUN_PRE, SET_RUN_DURING, SET_RUN_POST } from "../redux/actions"
export const TYPE= [
    {
      id:"run",
      icon:"running",
      name:"Regenerativa"
    },
    {
      id:"speed",
      icon:"stopwatch",
      name:"Velocidade"
    },
    {
      id:"long",
      icon:"map",
      name:"Longão"
    },
    {
      id:"race",
      icon:"flag-checkered",
      name:"Prova"
    }
  ]
export const WHERE= [
    {
      id:"trail",
      icon:"hiking",
      name:"Trilha"
    },
    {
      id:"street",
      icon:"route",
      name:"Rua"
    },
    {
      id:"inside",
      icon:"skiing-nordic",
      name:"Esteira"
    },
    {
      id:"track",
      icon:"road",
      name:"Track"
    }
  ]
export const PRE= 
[
    {
      id:"trail",
      icon:"hiking",
      name:"Trilha"
    },
    {
      id:"street",
      icon:"route",
      name:"Rua"
    },
    {
      id:"inside",
      icon:"skiing-nordic",
      name:"Esteira"
    },
    {
      id:"track",
      icon:"road",
      name:"Track"
    }
  ]
export const DURING= 
[
    {
      id:"trail",
      icon:"hiking",
      name:"Trilha"
    },
    {
      id:"street",
      icon:"route",
      name:"Rua"
    },
    {
      id:"inside",
      icon:"skiing-nordic",
      name:"Esteira"
    },
    {
      id:"track",
      icon:"road",
      name:"Track"
    }
  ]
export const POST= 
[
    {
      id:"trail",
      icon:"hiking",
      name:"Trilha"
    },
    {
      id:"street",
      icon:"route",
      name:"Rua"
    },
    {
      id:"inside",
      icon:"skiing-nordic",
      name:"Esteira"
    },
    {
      id:"track",
      icon:"road",
      name:"Track"
    }
  ]
export const TAG_LIST = [
    {
      title: "Qual foi o tipo do treino?",
      isMulti: false,
      listSize:2,
      type: SET_RUN_TYPE,
      name: 'type',
      list: TYPE
    },
    {
      title:"Onde você corre?",
      isMulti: false,
      listSize:3,
      type: SET_RUN_WHERE,
      name: 'where',
      list: WHERE
    },
    {
      title:"O que aconteceu antes do treino?",
      isMulti: true,
      listSize:3,
      type: SET_RUN_PRE,
      name: 'pre',
      list: PRE
    },
    {
      title:"E durante?",
      isMulti: true,
      listSize:3,
      type: SET_RUN_DURING, 
      name: 'during',
      list: DURING
    },
    {
      title:"O que você fez após correr?",
      isMulti: true,
      listSize:3,
      type: SET_RUN_POST,
      name: 'post',
      list: POST
    }
  ]