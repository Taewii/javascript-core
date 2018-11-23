function cook(input) {
    let num = +input[0];

    const chop = () => num /= 2;
    const dice = () => num = Math.sqrt(num);
    const spice = () => num += 1;
    const bake = () => num *= 3;
    const fillet = () => num *= 0.8;

    function performAction(action) {
        switch (action) {
            case 'chop': chop(); break;
            case 'dice': dice(); break;
            case 'spice': spice(); break;
            case 'bake': bake(); break;
            case 'fillet': fillet(); break;
        }
    }

    for (let i = 1; i < input.length; i++) {
        performAction(input[i]);
        console.log(num);
    }
}

cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);