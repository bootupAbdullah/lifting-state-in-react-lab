two items were adopted from trouble shotting with chatGOt:

(1) '<button onClick={() => props.addToBurger(ingredient)} >+</button>'

specifically the evocation of the onlick as an arrow function in {'()=>'}, prior to this, each of the ingredients would add render at once.


(2) The use of .splice here:

const removeFromBurger = (ingredient, index) => {
console.log(stack[index])
const currentStack = [...stack]
currentStack.splice(index, 1)
setStack(currentStack)
}


Glen suggested using pop or splice, after researching which method would be beter I requsted assitance on how to iplement this method though chatGPT.