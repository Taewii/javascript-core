function fruitOrVegetable(input) {
    switch (input) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            return 'fruit'
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            return 'vegetable';
        default:
            return 'unknown'
    }
}

console.log(fruitOrVegetable('banana'));
console.log(fruitOrVegetable('cucumber'));
console.log(fruitOrVegetable('pizza'));