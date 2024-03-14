export const fakeApiCall = (mock) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mock)
    }
      , 2000)
  })
}
