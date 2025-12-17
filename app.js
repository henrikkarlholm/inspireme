window.addEventListener("DOMContentLoaded", () => {
const MOODS = {
  touch_grass: {
    label: "precisando touch grass",
    items: [
      // textos / lembretes
      { type: "text", text: "vai dar uma volta ouvindo essas músicas :D" },
      { type: "text", text: "em algum momento tu vai estar na praia" },
      { type: "text", text: "ficar sem fazer nada também tem um sentido" },
      { type: "text", text: "a gente não muda o mundo de uma vez só" },
      { type: "text", text: "o simples nos ajuda" },
      { type: "text", text: "sinto falta de não saber, eu já sei de tanta coisa" },
      { type: "text", text: "eu meti umas duas letras de músicas minhas no meio dessas frases kkkkk" },
      { type: "text", text: "perdi" },

      // filmes
      { type: "text", text: "filme: boyhood (2014)" },
      { type: "text", text: "filme: perfect days (2023)" },
      { type: "text", text: "filme: almost famous (2000)" },
      { type: "text", text: "filme: la chimera (2023)" },
      { type: "text", text: "filme: the meyerowitz stories (2017)" },
      { type: "text", text: "filme: captain fantastic (2016)" },
      { type: "text", text: "filme: about time (2013)" },
      { type: "text", text: "filme: frances ha (2012)" },
      { type: "text", text: "filme: tá dando onda (2007) (sério)" },
      { type: "text", text: "filme: the straight story (1999)" },
      { type: "text", text: "once (2007)" },
      { type: "text", text: "a vida invísivel (2019) <- meio intankavel mas ok" },
      { type: "text", text: "petit maman (2021)" },

      // spotify (padronizado: sem /intl-pt e sem ?si=)
      { type: "spotify", url: "https://open.spotify.com/track/1ituIZ0tSIc1timwCxWg3m" },
      { type: "spotify", url: "https://open.spotify.com/track/4AvGbMjGVkqC8Kmxn6EUQP" },
      { type: "spotify", url: "https://open.spotify.com/track/5TSj6ySt4WqDuljv61Q4D5" },
      { type: "spotify", url: "https://open.spotify.com/track/70gbuMqwNBE2Y5rkQJE9By" },
      { type: "spotify", url: "https://open.spotify.com/track/10O2E4f2fJ9chXFFPs32wo" },
      { type: "spotify", url: "https://open.spotify.com/track/4IU1RL4BKvFyXtbTwaHAvW" },
      { type: "spotify", url: "https://open.spotify.com/track/7Fw7VPZTX461fLYo72UkV1" },
      { type: "spotify", url: "https://open.spotify.com/track/3JfZDI5g3LGO2GFr2iUEAH" }, // (removi o duplicado)
      { type: "spotify", url: "https://open.spotify.com/track/5cK0wREGoDqNKECNlw8xzx" },
      { type: "spotify", url: "https://open.spotify.com/track/0tVzXGFyNPusa1VkHmYDLd" },
      { type: "spotify", url: "https://open.spotify.com/track/7pdmBld4yW3WIUkrxHyb5r" },
      { type: "spotify", url: "https://open.spotify.com/track/5GPPI3rnZDptLYRN4vTUoZ" },
      { type: "spotify", url: "https://open.spotify.com/track/3GlYv2EDC7EBoslv2dOE0G" },
      { type: "spotify", url: "https://open.spotify.com/track/3G6XpCfczuhbTSBlgfqe9v" },
      { type: "spotify", url: "https://open.spotify.com/track/0lq9TEXMVVSDcaj1azH6Po" },
      { type: "spotify", url: "https://open.spotify.com/track/1sdW2whJr8CLa6bMA67LPQ" },
      { type: "spotify", url: "https://open.spotify.com/track/16XeptMdlJTWWeIrwEAOvv" },
      { type: "spotify", url: "https://open.spotify.com/track/5M5TD1Tlpcgq0Fj1l6Mz6Z" },
      { type: "spotify", url: "https://open.spotify.com/track/3qTJrHpLz7yY1SRux2Nf3H" },
      { type: "spotify", url: "https://open.spotify.com/track/0sWXc2HP7INhTEkuUbxJGk" },
      { type: "spotify", url: "https://open.spotify.com/track/4rBnrnqnI0tcjcNAFO6RZO" },
      { type: "spotify", url: "https://open.spotify.com/track/3PzsbWSQdLCKDLxn7YZfkM" },
      { type: "spotify", url: "https://open.spotify.com/track/4lJ6YVXQ0jUk5ILu0PSrA4" },
      { type: "spotify", url: "https://open.spotify.com/track/6GTpWehJcSErWgcVDDVvTU" },
      { type: "spotify", url: "https://open.spotify.com/track/7sMZ7doYb71bHK8tqviTCu" },
      { type: "spotify", url: "https://open.spotify.com/track/5eEfFfQq3ruywWA5uw7nhj" },
      { type: "spotify", url: "https://open.spotify.com/track/7xRemq7GLu0Tbqe9OckG87" },
      { type: "spotify", url: "https://open.spotify.com/track/3m0iAPHzwU6cZT8vNCrZZO" },
      { type: "spotify", url: "https://open.spotify.com/track/5l9c6bJmzvftumhz4TMPgk" },
      { type: "spotify", url: "https://open.spotify.com/track/5vVFqQihO5rGCN7VshfgIR" },
      { type: "spotify", url: "https://open.spotify.com/track/6QtA9isiOb6zymFQAKr5L5" },
      { type: "spotify", url: "https://open.spotify.com/track/4U45aEWtQhrm8A5mxPaFZ7" },
      { type: "spotify", url: "https://open.spotify.com/track/3tKP05zPWeJGVAhbE96R7H" },
      { type: "spotify", url: "https://open.spotify.com/track/3tKP05zPWeJGVAhbE96R7H" }, 
      { type: "spotify", url: "https://open.spotify.com/track/1sWYVBg7ix2WAq43J9nY7E" },
      { type: "spotify", url: "https://open.spotify.com/track/5TUmfePkCdoSYSavOykhau" },
      { type: "spotify", url: "https://open.spotify.com/track/6pHuMjk9O1G3XTTqbnpkTl" },
      { type: "spotify", url: "https://open.spotify.com/track/5gOnivVq0hLxPvIPC00ZhF" },
      { type: "spotify", url: "https://open.spotify.com/track/5anmC2NmiEOlfp5ahKxKia" },
      { type: "spotify", url: "https://open.spotify.com/track/3Fv8KP2lJvWSn7M7W38jag" },
      { type: "spotify", url: "https://open.spotify.com/track/08T0vbgINtEw2BJYhdfvZB" },
      { type: "spotify", url: "https://open.spotify.com/track/65krtHkaYLPr0mEbjL61UP" },
      { type: "spotify", url: "https://open.spotify.com/track/65krtHkaYLPr0mEbjL61UP" },
      { type: "spotify", url: "https://open.spotify.com/track/0sDqo9UPzPUtu9wEkI3zRB" }, 
    ],
  },


droga: {
  label: "um pouco de droga",
  items: [
    { type: "spotify", url: "https://open.spotify.com/track/1O9I2QajEqi6IcmFyWgRfq" },
    { type: "spotify", url: "https://open.spotify.com/track/7CYEnt9QJb6PX3GbfEjWXo" },
    { type: "spotify", url: "https://open.spotify.com/track/3rhCQVwAYYdcc0yFLQi3Kb" },
    { type: "spotify", url: "https://open.spotify.com/track/5oPr1PKNRf3rcdgDxkVRpb" },
    { type: "spotify", url: "https://open.spotify.com/track/6gj9PVuBk4zt9tc1N98u9C" },
    { type: "spotify", url: "https://open.spotify.com/track/6mUNR2pJOxKRCVo97YVlHE" },
    { type: "spotify", url: "https://open.spotify.com/track/4I5tjmq7DRY9pHqKgiE5Fr" },
    { type: "spotify", url: "https://open.spotify.com/track/0IsIY8pfu1yaGkPUD7pkDx" },
    { type: "spotify", url: "https://open.spotify.com/track/4wTvw1dBiPXNiHTh0zzpcI" },
    { type: "spotify", url: "https://open.spotify.com/track/5h68SoVFGleijCtjEja3xG" },
    { type: "spotify", url: "https://open.spotify.com/track/1huN927tTdSiwF90FBHXkT" },
    { type: "spotify", url: "https://open.spotify.com/track/4c252FOXsYUwrSRv8g9aei" },
    { type: "spotify", url: "https://open.spotify.com/track/5t4xArxems9xV4SJFJjNQB" },
    { type: "spotify", url: "https://open.spotify.com/track/1lMoDHp52FjhfbE7CeUwlB" },
    { type: "spotify", url: "https://open.spotify.com/track/0yjYd6ZSpua1KC54BhEupz" },
    { type: "spotify", url: "https://open.spotify.com/track/55gnBQAhU5rGzLsXTAx2MM" },
    { type: "spotify", url: "https://open.spotify.com/track/409z4jUHpq7eIkg3N3FzZh" },
    { type: "spotify", url: "https://open.spotify.com/track/0Mov1mEZkKFHTGgFiO3ONa" },
    { type: "spotify", url: "https://open.spotify.com/track/2nQeWDP8OA9vFqiCfghot2" },
    { type: "spotify", url: "https://open.spotify.com/track/767dzStBEfSQ81LszfUHnS" },
    { type: "spotify", url: "https://open.spotify.com/track/3uE2CHkhqSk2UZdKNb4dUl" },
    { type: "spotify", url: "https://open.spotify.com/track/4qeIlzP0Z1JFXh0AckDcX8" },
    { type: "spotify", url: "https://open.spotify.com/track/79gWc6dZ1dXH7rC67DTunz" },
    { type: "spotify", url: "https://open.spotify.com/track/5OHOxbQzqdwH2wzYvUNL3u" },
    { type: "spotify", url: "https://open.spotify.com/track/1xqT27jSG1Y15vOXfsV0gv" },
    { type: "spotify", url: "https://open.spotify.com/track/6qyS9qBy0mEk3qYaH8mPss" },
    { type: "spotify", url: "https://open.spotify.com/track/3CbF4eluvVhJ9v0axMj2Rk" },
    { type: "spotify", url: "https://open.spotify.com/track/2FYGZDfsAnNsrm1gVbyKnG" },
      { type: "text", text: "i see you're feeling apocalíptica" },
      { type: "text", text: "calma vei kkkk" },
      { type: "text", text: "eita como gosta de festa" },
  ],
},


norte: {
  label: "ventos do norte",
  items: [
    { type: "spotify", url: "https://open.spotify.com/track/1cQQB9z7fNQQ2VzSkslt7Y" },
    { type: "spotify", url: "https://open.spotify.com/track/7bRcgBFPDgWhVuopP5x6MW" },
    { type: "spotify", url: "https://open.spotify.com/track/7zaYJVsA2P2Xs7o9pql2zo" },
    { type: "spotify", url: "https://open.spotify.com/track/0tBTnrMcc91qKP9dHqhsS7" },
    { type: "spotify", url: "https://open.spotify.com/track/4dk40nfaQav6b4ZsJ9OYUo" },
    { type: "spotify", url: "https://open.spotify.com/track/2yzPBlE5UXK2sqvnNM9QQ0" },
    { type: "spotify", url: "https://open.spotify.com/track/522YBf6WqBwJVAe7oHLymu" },
    { type: "spotify", url: "https://open.spotify.com/track/6c4IBaa5opgDKC5mVQEauZ" },
    { type: "spotify", url: "https://open.spotify.com/track/4u7vj352S98d9iA7ac1EVG" },
    { type: "spotify", url: "https://open.spotify.com/track/5j58jhAFzAy0keSuQYsQBn" },
    { type: "spotify", url: "https://open.spotify.com/track/7FwBtcecmlpc1sLySPXeGE" },
    { type: "spotify", url: "https://open.spotify.com/track/07ABETRdek3ACMpRPvQuaT" },
    { type: "spotify", url: "https://open.spotify.com/track/7Jh1bpe76CNTCgdgAdBw4Z" },
    { type: "spotify", url: "https://open.spotify.com/track/57iDDD9N9tTWe75x6qhStw" },
    { type: "spotify", url: "https://open.spotify.com/track/1KsI8NEeAna8ZIdojI3FiT" },
    { type: "spotify", url: "https://open.spotify.com/track/7G7tgVYORlDuVprcYHuFJh" },
    { type: "spotify", url: "https://open.spotify.com/track/4NnWuGQujzWUEg0uZokO5M" },
    { type: "spotify", url: "https://open.spotify.com/track/7o9uu2GDtVDr9nsR7ZRN73" },
    { type: "spotify", url: "https://open.spotify.com/track/2bDcAgInBIJilki3Y9RpHl" },
    { type: "spotify", url: "https://open.spotify.com/track/7rpUsVjQyitDQ27NRybgZl" },
    { type: "spotify", url: "https://open.spotify.com/track/0DAmSYQW9kq9gQNDI002KP" },
    { type: "spotify", url: "https://open.spotify.com/track/3k2kIiJqUiIP49iUcOLpWT" },
    { type: "spotify", url: "https://open.spotify.com/track/2EEinN4Zk8MUv4OQuLsTBj" },
    { type: "spotify", url: "https://open.spotify.com/track/2fXKyAyPrEa24c6PJyqznF" },
    { type: "spotify", url: "https://open.spotify.com/track/6WmIyn2fx1PKQ0XDpYj4VR" },
    { type: "spotify", url: "https://open.spotify.com/track/2fuYa3Lx06QQJAm0MjztKr" },
    { type: "spotify", url: "https://open.spotify.com/track/5YSI1311X8t31PBjkBG4CZ" },
    { type: "spotify", url: "https://open.spotify.com/track/55Wm3y6wUy5xS1thd0Zial" },
    { type: "spotify", url: "https://open.spotify.com/track/2Vqi1Si1dQjMtAZ79UreqL" },
    { type: "spotify", url: "https://open.spotify.com/track/3xKTpGCsafXzV4muM1Hpl3" },
    { type: "spotify", url: "https://open.spotify.com/track/2pNwQBjJppt8v3sZojH1aj" },
    { type: "spotify", url: "https://open.spotify.com/track/5IpKduzyTWSCebGXkfJ2Mm" },
    { type: "spotify", url: "https://open.spotify.com/track/4dBI72rgkmG0gTzswyBTzz" },
    { type: "spotify", url: "https://open.spotify.com/track/7uPmQttafLiJyju14JREY4" },
    { type: "spotify", url: "https://open.spotify.com/track/6dfhF1BDGmhM69fnCb6wSC" },

    { type: "text", text: "filme: the holdovers (2023)" },
    { type: "text", text: "filme: little women (2019)" },
    { type: "text", text: "filme: sense and sensibility (1995)" },
    { type: "text", text: "filme: sing street (2016)" },
    { type: "text", text: "filme: notting hill (1999)" },
    { type: "text", text: "filme: home alone (1990)" },
    { type: "text", text: "filme: emil i lönneberga (1971) ← suécia :D" },
    { type: "text", text: "filme: pippi langstrump (1969) ← suécia :D" },
  ],
},

sul: {
  label: "calor do sul",
  items: [
    { type: "spotify", url: "https://open.spotify.com/track/55PZTNK5UmUqWktzQtU1uI" },
    { type: "spotify", url: "https://open.spotify.com/track/3N0S1f9cf3L6XbIXr27pYe" },
    { type: "spotify", url: "https://open.spotify.com/track/2kVm4qAAXR7qUfHdiKg0qI" },
    { type: "spotify", url: "https://open.spotify.com/track/35Wfw6eyw39YpOp2lRH11c" },
    { type: "spotify", url: "https://open.spotify.com/track/661Ns9G25zHdih4qVshBO7" },
    { type: "spotify", url: "https://open.spotify.com/track/70dJEanFPdYuWZumkrnKeX" },
    { type: "spotify", url: "https://open.spotify.com/track/74Es0YAvJFbFCZ6ULMcydb" },
    { type: "spotify", url: "https://open.spotify.com/track/4956xD0yHMfb8SDqcfI47c" },
    { type: "spotify", url: "https://open.spotify.com/track/2OA4YzlN5FWUXcfRit9nmU" },
    { type: "spotify", url: "https://open.spotify.com/track/64ygSCb6X56Uu90GFji1Oo" },
    { type: "spotify", url: "https://open.spotify.com/track/4S18cCp2R0Z0SdbCwNC4ZL" },
    { type: "spotify", url: "https://open.spotify.com/track/54JLlb23AnzXErLRSNVIUn" },
    { type: "spotify", url: "https://open.spotify.com/track/7bdhM9AJqWAIHooF4sh3wW" },
    { type: "spotify", url: "https://open.spotify.com/track/1gCpNUnGUVtomArQPB3f0x" },
    { type: "spotify", url: "https://open.spotify.com/track/3aXbjjFVHC86pSZey62vbS" },
    { type: "spotify", url: "https://open.spotify.com/track/7pn5QXr2LTeGsgHyCaJxDo" },
    { type: "spotify", url: "https://open.spotify.com/track/0V0DEGw7N5KlubvARp4VOm" },
    { type: "spotify", url: "https://open.spotify.com/track/11gIxacOHnCVPL0dZ3xOnC" },
    { type: "spotify", url: "https://open.spotify.com/track/3Dx6Wk14yRdWlQonXjDG0h" },
    { type: "spotify", url: "https://open.spotify.com/track/6MCaOLDl0epJPRN76H5S4N" },
    { type: "spotify", url: "https://open.spotify.com/track/30RSImaLWJ0qDlP36noe7l" },
    { type: "spotify", url: "https://open.spotify.com/track/71nZeuoiMnfxISvp7luJy2" },
    { type: "spotify", url: "https://open.spotify.com/track/3LcGqv91NIBQaUmnNbsKu8" },
    { type: "spotify", url: "https://open.spotify.com/track/2DREhftHdD8pRmNdSs6nyF" },
    { type: "spotify", url: "https://open.spotify.com/track/3cijWAljXxxJDco4N2aLQl" },
    { type: "spotify", url: "https://open.spotify.com/track/7MxVCTR3xD55xikxKiGCrv" },
    { type: "spotify", url: "https://open.spotify.com/track/0C13P4IghHNFPjt4zIJ8vX" },
    { type: "spotify", url: "https://open.spotify.com/track/2ijmbhpcu07SlmVMgHRGUX" },
    { type: "spotify", url: "https://open.spotify.com/track/4UwkqNp93kPnwWyuDdfpmy" },
    { type: "spotify", url: "https://open.spotify.com/track/0tTDmG5WqLVc1CPuvuL22Z" },
    { type: "spotify", url: "https://open.spotify.com/track/3bxZhauuIU4ubctdRZwPYW" },
    { type: "spotify", url: "https://open.spotify.com/track/2QGzg5htcf4b0NeSLbi0K6" },
    { type: "spotify", url: "https://open.spotify.com/track/5TFD2bmFKGhoCRbX61nXY5" },
    { type: "spotify", url: "https://open.spotify.com/track/6XblFniaIvfdIfuIlD7Ywg" },

    { type: "text", text: "bah armandinho é o terror né meu" },
    { type: "text", text: "vou ficar na praia todo dia" },
    { type: "text", text: "não sei tu mas eu queria estar em garopaba" },
    { type: "text", text: "filme: bye bye brasil (1980)" },
  ],
},


 otimismo: {
  label: "it's all about love, man",
  items: [
    { type: "spotify", url: "https://open.spotify.com/track/0fzqnqxwSh5Bmq8sY9tFb9" },
    { type: "spotify", url: "https://open.spotify.com/track/19Ym5Sg0YyOCa6ao21bdoG" },
    { type: "spotify", url: "https://open.spotify.com/track/5yEPxDjbbzUzyauGtnmVEC" },
    { type: "spotify", url: "https://open.spotify.com/track/7BHPGtpuuWWsvE7cCaMuEU" },
    { type: "spotify", url: "https://open.spotify.com/track/40dJCw4xU6Bd5ie9rfagNo" },
    { type: "spotify", url: "https://open.spotify.com/track/7gozgbG5EBTukCFWToTRA5" },
    { type: "spotify", url: "https://open.spotify.com/track/7av4raprzW2bWdjyAaH3hz" },
    { type: "spotify", url: "https://open.spotify.com/track/2LpirOWiA4eslLRuPpQT7V" },
    { type: "spotify", url: "https://open.spotify.com/track/2UjLzxf4oYjHOVOBoVojlL" },
    { type: "spotify", url: "https://open.spotify.com/track/37AyXivrY5G4v2QJFQlWn6" },
    { type: "spotify", url: "https://open.spotify.com/track/5WSdMcWTKRdN1QYVJHJWxz" },
    { type: "spotify", url: "https://open.spotify.com/track/5uzNa0SBGOe5pPnstWHMCt" },
    { type: "spotify", url: "https://open.spotify.com/track/1KsI8NEeAna8ZIdojI3FiT" },
    { type: "spotify", url: "https://open.spotify.com/track/4iG2gAwKXsOcijVaVXzRPW" },
    { type: "spotify", url: "https://open.spotify.com/track/61dXuN3VyqGOyOeMfJXIPh" },
    { type: "spotify", url: "https://open.spotify.com/track/4TOYmUloyDslQIj0k3pXn3" },
    { type: "spotify", url: "https://open.spotify.com/track/2Ud3deeqLAG988pfW0Kwcl" },
    { type: "spotify", url: "https://open.spotify.com/track/4eH8TpawYJMjcDvC0LDHYv" },
    { type: "spotify", url: "https://open.spotify.com/track/1wC93sZRGcTgKLN2UWRSwW" },
    { type: "spotify", url: "https://open.spotify.com/track/4Iyo50UoYhuuYORMLrGDci" },
    { type: "spotify", url: "https://open.spotify.com/track/15Mh8m2BGTUptR8yy7fNAS" },
    { type: "spotify", url: "https://open.spotify.com/track/0iFktIoaM3qNeguIibIEyB" },
    { type: "spotify", url: "https://open.spotify.com/track/66lvmGhRtKwmXTARMqNRl7" },
    { type: "spotify", url: "https://open.spotify.com/track/3ysiD7ZgsPc3xgGJ59DpS7" },
    { type: "spotify", url: "https://open.spotify.com/track/2PIcAQiSOayFwJrfWc72Qc" },
    { type: "spotify", url: "https://open.spotify.com/track/3Y8Ff1nH44jFywAtpgmleZ" },
    { type: "spotify", url: "https://open.spotify.com/track/2bOtPtzdNZMXxuAETyMSUt" },
    { type: "spotify", url: "https://open.spotify.com/track/6iGU74CwXuT4XVepjc9Emf" },
    { type: "spotify", url: "https://open.spotify.com/track/2tUBqZG2AbRi7Q0BIrVrEj" },
    { type: "spotify", url: "https://open.spotify.com/track/32lF1rsInDTdK6Av3KdfaY" },
    { type: "spotify", url: "https://open.spotify.com/track/2os0aK782bakCPmjow0SU0" },
    { type: "spotify", url: "https://open.spotify.com/track/0lIoY4ZQsdn5QzhraM9o9u" },
    { type: "spotify", url: "https://open.spotify.com/track/1DnSZ9M8uvX0UebR3dmBNI" },
    { type: "spotify", url: "https://open.spotify.com/track/6aBUnkXuCEQQHAlTokv9or" },
    { type: "spotify", url: "https://open.spotify.com/track/0CaBBQsaAiRHhiLmzi7ZRp" },
    { type: "spotify", url: "https://open.spotify.com/track/7oPB5rRWan5SeijxL94Qmz" },
    { type: "spotify", url: "https://open.spotify.com/track/2BvDFQOl4JieEGK2cgKOey" },
    { type: "spotify", url: "https://open.spotify.com/track/1UsAjRCSavihMYsspqJz4e" },
    { type: "spotify", url: "https://open.spotify.com/track/7GNJgRUNRACGYH8ySNyqgj" },
    { type: "spotify", url: "https://open.spotify.com/track/6fEjOPaZoxQl3oha9GDJAN" },
    { type: "spotify", url: "https://open.spotify.com/track/3U4bUBl7zDaAWnTJbQ4Lpl" },
    { type: "spotify", url: "https://open.spotify.com/track/5WdMBJD7V5CVBTBdE2at2D" },
    { type: "spotify", url: "https://open.spotify.com/track/4GhtDORJiSRYxj6M1bv0vX" },
    { type: "spotify", url: "https://open.spotify.com/track/4oup3KfsjiTNmx5LiJSZQf" },

    { type: "text", text: "acho que tínhamos que voltar a acreditar que o amor pode mudar o mundo" },
    { type: "text", text: "mais otimismo millennial cringe, menos cinismo!!" },
    { type: "text", text: "não é só sobre amor romântico tlgd" },
    { type: "text", text: "filme: when harry met sally (1989)" },
    { type: "text", text: "filme: hook (1991)" },
    { type: "text", text: "filme: the goonies (1985)" },
    { type: "text", text: "filme: as good as it gets (1997)" },
    { type: "text", text: "filme: good will hunting (1997)" },
  ],
},

};

const recentPicks = {};
const MEMORY_SIZE = 4; // quantos últimos evitar (2–4 é o ideal)

  const moodsDiv = document.getElementById("moods");
  const titleEl = document.getElementById("title");
  const outEl = document.getElementById("out");
  const playerArea = document.getElementById("playerArea");

function pickRandom(moodKey) {
  const items = MOODS[moodKey].items;

  if (!recentPicks[moodKey]) {
    recentPicks[moodKey] = [];
  }

  // filtra itens que não estão na memória recente
  let pool = items.filter(
    (item) => !recentPicks[moodKey].includes(item)
  );

  // se acabou o pool, libera tudo de novo
  if (pool.length === 0) {
    recentPicks[moodKey] = [];
    pool = items;
  }

  const choice = pool[Math.floor(Math.random() * pool.length)];

  // atualiza memória
  recentPicks[moodKey].push(choice);
  if (recentPicks[moodKey].length > MEMORY_SIZE) {
    recentPicks[moodKey].shift();
  }

  return choice;
}


  function toSpotifyEmbed(url) {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    return `https://open.spotify.com/embed/${parts[0]}/${parts[1]}`;
  }

  function renderItem(item) {
    playerArea.innerHTML = "";
    outEl.innerHTML = "";

    if (item.type === "spotify") {
      playerArea.innerHTML = `
        <iframe
          src="${toSpotifyEmbed(item.url)}"
          width="100%"
          height="152"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
      `;
      outEl.innerHTML = `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer">
          abrir no spotify
        </a>
      `;
      return;
    }

    outEl.textContent = item.text;
  }

  moodsDiv.innerHTML = "";

  Object.keys(MOODS).forEach((key) => {
    const mood = MOODS[key];
    const btn = document.createElement("button");
    btn.textContent = mood.label.toLowerCase();

    btn.addEventListener("click", () => {
      titleEl.textContent = mood.label.toLowerCase();
      renderItem(pickRandom(key));
    });

    moodsDiv.appendChild(btn);
  });
});


