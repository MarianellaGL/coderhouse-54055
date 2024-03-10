const mockUsers = [
  {
    userId: 1,
    name: "lex Luthor",
    mail: "lexie@luthor.com",
    onLine: false
  },
  {
    userId: 2,
    name: "Obi Wan",
    mail: "obiwan@gmail.com",
    onLine: true
  },
  {
    userId: 3,
    name: "Yoda",
    mail: "yoda@theforce.com",
    onLine: false
  },
  {
    userId: 4,
    name: "Princess Leia",
    mail: "leiaprincess@gmail.com",
    onLine: true
  }
]

const mockComments = [
  {
    id: 12344,
    comment: "lorem ipsum..."
  },
  {
    id: 12347,
    comment: "lorem etc etc..."
  }
]


export const getUsers = () =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(mockUsers)
    }, 2000)
  })
}

export const getComments = () =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(mockComments)
    }, 2000)
  })
}