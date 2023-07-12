/* 
    现给定两个数组 arr1 和 arr2 ，返回一个新的数组 joinedArray 。两个输入数组中的每个对象都包含一个 id 字段。joinedArray 是一个通过 id 将 arr1 和 arr2 连接而成的数组。joinedArray 的长度应为唯一值 id 的长度。返回的数组应按 id 升序 排序。
    如果一个 id 存在于一个数组中但不存在于另一个数组中，则该对象应包含在结果数组中且不进行修改。
    如果两个对象共享一个 id ，则它们的属性应进行合并：
    如果一个键只存在于一个对象中，则该键值对应该包含在对象中。
    如果一个键在两个对象中都包含，则 arr2 中的值应覆盖 arr1 中的值。 
*/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let id1 = 0
    let id2 = 0
    let newArr = []
    while(id1 < arr1.length && id2 < arr2.length) {
        if (arr1[id1].id === arr2[id2].id) {
            newArr.push({...arr1[id1], ...arr2[id2]})
            id1++
            id2++
        } else if (arr1[id1].id > arr2[id2].id) {
            newArr.push(arr2[id2])
            id2++
        } else {
            newArr.push(arr1[id1])
            id1++
        }
       
    }
    if (id1 < arr1.length) while(id1 < arr1.length) {
        newArr.push(arr1[id1]) 
        id1++
    }
    if (id2 < arr2.length) while(id2 < arr2.length) {
        newArr.push(arr2[id2]) 
        id2++
    }
    console.log(newArr)
    return newArr
};

var join01 = function(arr1, arr2) {
    newArr = arr1.concat(arr2)
    const map = new Map()
    newArr.forEach(item => {
        if (map.has(item.id)) {
            map.set(item.id, {...map.get(item.id), ...item})
        } else {
            map.set(item.id, {...item})
        }
    })
    return [...map.values()].sort((a, b) => a.id - b.id)
};

arr1 = [{"id": 1,"x": 1},{"id": 2,"x": 9}]
arr2 = [{"id": 3,"x": 5}]

join01(arr1, arr2)