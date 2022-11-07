/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */

type person = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};

export function getPersons(): person[];

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */

type user = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};

type Employee = user & { company: string };

export function personToString(person: user | Employee): string;
