function solve(n1, n2) {

    result = n1;
    let ss = `${n1} `;
    for (let i = n1 + 1; i <= n2; i ++) {
        result += i;
        ss += `${i} `;
    }
    console.log(ss);
    console.log(`Sum: ${result}`);


}

solve(5, 10);