$("form").on("submit", addToList);
$("ul#list").on("click", "li", addToPurchased);
$("button#removeShoppingList").on("click", removeShopping);
$("button#removePurchasedList").on("click", removePurchased);

function addToList(event) {
    event.preventDefault();

    //get the item from the box
    let item = $("input#item").val();

    //add item to new <li> in <ul> list
    $("ul#list").append(`<li>${item}</li>`);
}

function addToPurchased(event) {
    event.preventDefault();

    //get target item
    (event.target).remove();

    //remove item from list
    $("ul#purchased").append(event.target);
}

function removeShopping() {
    $("ul#list").empty();
}

function removePurchased() {
    $("ul#purchased").empty();
}