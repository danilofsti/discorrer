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
      list: TYPE
    },
    {
      title:"Onde você corre?",
      isMulti: false,
      listSize:3,
      list: WHERE
    },
    {
      title:"O que aconteceu antes do treino?",
      isMulti: true,
      listSize:3,
      list: PRE
    },
    {
      title:"E durante?",
      isMulti: true,
      listSize:3,
      list: DURING
    },
    {
      title:"O que você fez após correr?",
      isMulti: true,
      listSize:3,
      list: POST
    }
  ]