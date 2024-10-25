function validate(password) {

    let digits = false;
    let len = true;
    let onlyDigitsAndLetters = true;
    let twoDigits = 0;

    function isDigitAtIndex(ch) {
        const charCode = ch.charCodeAt(0);
        return charCode >= 48 && charCode <= 57;
    }

    function isLetterAtIndex(ch) {
        const charCode = ch.charCodeAt(0);
        return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
    }

    if (password.length > 10 || password.length < 6) {
        len = false;
    }
    for (let i = 0; i < password.length; i ++) {
        if (onlyDigitsAndLetters) {
            if (!isLetterAtIndex(password[i]) && !isDigitAtIndex(password[i])) {
                onlyDigitsAndLetters = false;
                break;
            }
        }
        if (twoDigits < 2 && isDigitAtIndex(password[i])) {
            twoDigits += 1;
            digits = true;
        }
    }
    if (!len) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (!onlyDigitsAndLetters) {
        console.log("Password must consist only of letters and digits");
    }
    if (twoDigits < 2) {
        console.log("Password must have at least 2 digits");
    }
    if (twoDigits && onlyDigitsAndLetters && len) {
        console.log(`Password is valid`);
    }
    
}


validate('Pa$s$s');