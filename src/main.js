var searchValue = document.getElementById("name").value;
const getWeatherConditions = async(searchValue) => {
// to fetch data from api
await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
  .then(response => response.json())
  .then(data => {
      console.log(data);
    // for the response api data being displayed in table
    let table = document.getElementById("tableBody");
    let row = document.createElement("tr")

    let div = document.createElement("td");
      div.setAttribute("id", "conditions");
      let food = document.createElement("td");
      let foodNode = document.createTextNode(data.meals[0].strMeal);
      food.appendChild(foodNode);

      let img = document.createElement("td");
      let imgNode = document.getElementById("myimage").src = data.meals[0].strMealThumb;

      let cat = document.createElement("td");
      let catNode = document.createTextNode(data.meals[0].strCategory);
      cat.appendChild(catNode);

      let ori = document.createElement("td");
      let oriNode = document.createTextNode(data.meals[0].strArea);
      ori.appendChild(oriNode);

      let ing = document.createElement("td");
      let ingNode = document.createTextNode(" "  + data.meals[0].strMeasure1 + "  " + data.meals[0].strIngredient1 + " , " + data.meals[0].strMeasure2 + " " + data.meals[0].strIngredient2
      + "  , " + data.meals[0].strMeasure3 + "  " + data.meals[0].strIngredient3 + " , " + data.meals[0].strMeasure4 + "  " + data.meals[0].strIngredient4
      + "  , " + data.meals[0].strMeasure5 + "  " + data.meals[0].strIngredient5 + " , " + data.meals[0].strMeasure6 + "  " + data.meals[0].strIngredient6);
      ing.appendChild(ingNode);

      let ins = document.createElement("td");
      let insNode = document.createTextNode(data.meals[0].strInstructions);
      ins.appendChild(insNode);
      

      row.appendChild(food);
      row.appendChild(cat);
      row.appendChild(ori);
      row.appendChild(ing);
      row.appendChild(ins);
      table.appendChild(row);

  })
  //to alert the user if there is unavailable meal recipe
  .catch(err => alert("Unavailable Meal Recipe.\nPlease Enter Other Type of Meal."))}
  document.addEventListener("DOMContentLoaded", (e) => {
    mealForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if(document.querySelector("#name").value != ""){
            let conditionsDiv = document.querySelector("#conditions");
            if(conditionsDiv){
                document.querySelector("main").removeChild(conditionsDiv);
            }
            getWeatherConditions(document.getElementById("name").value);
        }else{
            console.log("Unavailable Meal");
        }
    })

   
})







