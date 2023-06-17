//данные в формате XML
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

//Преобразование:
const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll('student');

//Рхабивка по студентам
const student1 = studentNode[0];
const student2 = studentNode[1];

//Первый студент
const nameNode1 = student1.querySelector('name');
const langAttr1 = nameNode1.getAttribute('lang');
const firstNameNode1 = nameNode1.querySelector('first').textContent;
const secondNameNode1 = nameNode1.querySelector('second').textContent;
const age1 = Number(student1.querySelector('age').textContent);
const prof1 = student1.querySelector('prof').textContent;

//Второй студент
const nameNode2 = student2.querySelector('name');
const langAttr2 = nameNode2.getAttribute('lang');
const firstNameNode2 = nameNode2.querySelector('first').textContent;
const secondNameNode2 = nameNode2.querySelector('second').textContent;
const age2 = Number(student2.querySelector('age').textContent);
const prof2 = student2.querySelector('prof').textContent;

//Вывод результата:
const result = {
  list: [{ name: firstNameNode1 + ' ' + secondNameNode1, age: age1, prof: prof1, lang: langAttr1 },
  { name: firstNameNode2 + ' ' + secondNameNode2, age: age2, prof: prof2, lang: langAttr2 }]
}

console.log(result)
