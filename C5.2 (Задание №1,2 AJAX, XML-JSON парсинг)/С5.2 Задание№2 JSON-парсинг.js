const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`

const data = JSON.parse(jsonString);
const list = data.list;

const result = {
   list: []
}

for (let i of list) {
   result.list.push(
      {
         name: i.name,
         age: Number(i.age),
         prof: i.prof
      }
   )
}

console.log(result)
