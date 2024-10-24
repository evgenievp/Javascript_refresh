function same_n(text) {

    let num = String(text);
    let n = num[0];
    let res = parseInt(n);
    let same = 'true';

    for (let i = 1; i < num.length; i ++)
    {
        res += parseInt(num[i]);
        if (num[i] != num[i - 1])
        {
            same = "false";
        }
    }

    console.log(same);
    console.log(res);

}