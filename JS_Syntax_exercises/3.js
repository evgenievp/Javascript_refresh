function year(yy) {

    if (yy % 4 == 0 && yy % 100 !== 0) {
        console.log("yes");
    }

    else if (yy % 400 === 0){
        console.log("yes");
    }
    else {
        console.log("no");
    }

}