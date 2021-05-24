let cargoHold1 = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

//Use splice to make the following changes to the cargoHold1 array. Be sure to print the array after each step to confirm your updates.

//a) Insert the string 'keys' at index 3 without replacing any other entries.
cargoHold1.splice(3,0,"keys");
console.log(cargoHold1);

//b) Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).
cargoHold1.splice(cargoHold1.indexOf("instruction manual"),1)
console.log(cargoHold1);


//c) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.
cargoHold1.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold1);

let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];

let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
