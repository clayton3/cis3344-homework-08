const FoodTable = ({list}) => {
    const parseIngredients = (ingredientsList) => {
        const ingredientArr = ingredientsList.ingredients;
        let ingredients = "";
        for(let j = 0; j < ingredientArr.length; j++) {
            if (j + 1 < ingredientArr.length)
                ingredients += ingredientArr[j] + ", ";
            else
                ingredients += ingredientArr[j];
        }

        return ingredients;
    };

    return (
        <div className="clickSort">
            <h3>Italian Food Table</h3>
            <table>
                <thead>
                <tr>
                    <th className="textAlignCenter">Image</th>
                    <th className="textAlignCenter">Name</th>
                    <th className="textAlignCenter">Ingredients</th>
                    <th className="textAlignCenter">Prep Time</th>
                    <th className="textAlignCenter">Cook Time</th>
                    <th className="textAlignCenter">Author</th>
                    <th className="textAlignCenter">Views</th>
                    <th className="textAlignCenter">Rating</th>
                    <th className={"textAlignCenter"}>User ID</th>
                </tr>
                </thead>
                <tbody>
                {
                    list.map(listObj =>
                        <tr key={listObj.id}>
                            <td className="wideImage textAlignCenter"><img src={listObj.pic} /></td>
                            <td>{listObj.name}</td>
                            <td>{parseIngredients(listObj)}</td>
                            <td className="wideImage textAlignRight">{listObj.prepTime}</td>
                            <td className="wideImage textAlignRight">{listObj.cookTime}</td>
                            <td>{listObj.author}</td>
                            <td className="wideImage textAlignRight">{listObj.views}</td>
                            <td className="wideImage textAlignRight">{listObj.rating}</td>
                            <td className={"wideImage textAlignRight"}>{listObj.webUserId}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};