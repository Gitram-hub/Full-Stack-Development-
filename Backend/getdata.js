// export default function sum(a, b) {
//   return a + b
// }

export default async function fetchData(){
    const serverdata=await fetch("https://fakestoreapi.com/products")
    const jsondata=serverdata.json();
    return jsondata


}