function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem =>
        console.log(singleItem)
        
    )
    console.log("Now Enjoy Sandwich");
    
}

makeSandwich("Bread", "Butter")
makeSandwich("Chicken", "cheese", "Egg")
makeSandwich("Bread","Butter","Chicken","Tomato","Cheese","Egg")