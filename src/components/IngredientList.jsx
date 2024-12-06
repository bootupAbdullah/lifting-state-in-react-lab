// src/components/IngredientList.jsx


const IngredientList = (props) => {
    return (
      <ul>
        {props.availableIngredients.map((ingredient, index) => (
          <div key={index}>
          <li value={ingredient} style={{backgroundColor:ingredient.color}}>{ingredient.name}</li>
          <button onClick={() => props.addToBurger(ingredient)} >+</button>
          </div>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  



// const IngredientList = (props) => {
//   return <ul>
//     <li>{props.availableIngredients.map((ingredient, index) => {
//         return <li key={index}>{ingredient.name}</li>
//     })}</li>
//     </ul>;
// };

// export default IngredientList;
