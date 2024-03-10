 const mockProducts = [{
  "id":1,
  "nombreProducto": "producto 1",
  "img": "https://media.istockphoto.com/id/517109442/es/foto/aislado-con-pedacitos-de-chocolate.jpg?s=2048x2048&w=is&k=20&c=vWHtpVD_8ayTeAvEH8yt5aXmJgZUd3WPakcLrh3wpSc=",
  "precio": 0.99,
  "tieneDescuento": true,
 },
 {
  "id":2,
  "nombreProducto": "producto 2",
  "img": "https://media.istockphoto.com/id/517109442/es/foto/aislado-con-pedacitos-de-chocolate.jpg?s=2048x2048&w=is&k=20&c=vWHtpVD_8ayTeAvEH8yt5aXmJgZUd3WPakcLrh3wpSc=",
  "precio": 0.99,
  "tieneDescuento": false,
 },
 {
  "id":3,
  "nombreProducto": "producto 3",
  "img": "https://media.istockphoto.com/id/517109442/es/foto/aislado-con-pedacitos-de-chocolate.jpg?s=2048x2048&w=is&k=20&c=vWHtpVD_8ayTeAvEH8yt5aXmJgZUd3WPakcLrh3wpSc=",
  "precio": 0.99,
  "tieneDescuento": true,
 },
 {
  "id":4,
  "nombreProducto": "producto 4",
  "img": "https://media.istockphoto.com/id/517109442/es/foto/aislado-con-pedacitos-de-chocolate.jpg?s=2048x2048&w=is&k=20&c=vWHtpVD_8ayTeAvEH8yt5aXmJgZUd3WPakcLrh3wpSc=",
  "precio": 0.99,
  "tieneDescuento": false,
 }]

 export const getProducts = () =>{
  return new Promise((resolve)=>{
   setTimeout(()=>{
      resolve(mockProducts)
    }, 2000)
  });
 }