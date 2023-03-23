
const choice = (arr) => {
    const newArr = [...arr]
    const chosen = []
    const chosen2 = []
    let count = 4
    while (count > 0) {
        let idx = Math.floor(Math.random() * newArr.length);
        chosen.push(newArr[idx]);
        newArr.splice(idx, 1);
        if (newArr.length === 4){
            for (let x of newArr){
                chosen2.push(x)
            }
        }
        count--;
    }
    return [chosen, chosen2];
}

export {choice};