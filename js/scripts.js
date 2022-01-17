

// getting pizza total cost

function totalCost(size, crust, toppings, flavour, quantity, delivery){
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var toppings = document.getElementById("toppings").value;
    var flavour = document.getElementById("flavour").value;
    var quantity = document.getElementById("quantity").value;
    var delivery = document.getElementById("delivery").value;
    

    // pizza size
    var size;
    let small =  { name: "small", price: 800 };
    let medium = { name: "medium", price: 1000 };
    let large = { name: "large", price: 1200 };

    var pizzaSize = { size: [small, medium, large] }; {
        if (size == "small") {
            return 800;
        }
        else if (size == "medium") {
            return 1000;
        }
        else if (size == "large") {
            return 1200;
        }

    }

    // pizza crust

    var crust;
    let gluttenFree = { name: "glutenFree", price: 100 };
    let crispy = { name: "crispy", price: 80 };
    let stuffed = { name: "stuffed", price: 80 };

    var crustType = { crust: [gluttenFree, crispy, stuffed] }; {
        if (crust == "gluttenFree") {
            return 100;
        }
        else if (size == "crispy") {
            return 80;
        }
        else if (size == "stuffed") {
            return 100;
        }
    }

    // toppings

    var toppings;
    let cheese = { name: "cheese", price: 80 };
    let bacon = { name: "bacon", price: 50 };
    let sausage = { name: "sausage", price: 50 };
    let bacon = { name: "beef", price: 50 };
    let sausage = { name: "chicken", price: 50 };


    var toppings = { toppings: [cheese, bacon, sausage, beef, chicken] }; {
        if (toppings == "cheese") {
            return 80;
        }
        else if (toppings == "bacon") {
            return 50;
        }
        else if (toppings == "sausage") {
            return 50;
        }

        else if (toppings == "beef") {
            return 50;
        }

        else if (toppings == "chicken") {
            return 50;
        }

    }

    // delivery cost

    var delivery;
    let delivery = { name: "delivery", price: 200 };


    var delivery = { delivery: [delivery] }; {
        if (delivery == "true") {
            return 200;
        }

        else if (delivery == " ") {
            return 0;
        }

    }

    // quantity

    var quantity;
    let quantity = {name: "quantity", price: updateQuantity}

    var quantity = {quantity: [updateQuantity]};{
        if (quantity == 0) {
            return 0;
        }

        else if (updateQuantity = function() {
            return + this.quantity;
        }
        return 

    }

    
    $("#order").click(function() {
        alert("'we have received your message. Thank you for reaching out to us'.");
      });


    




    function newFunction() {
        var flavour;
        return flavour;
    }
}