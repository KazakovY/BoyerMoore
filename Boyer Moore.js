let str = 'abrakadabra';
let substr = 'abra';

let N = new Array();
for (let i = 0; i < substr.length; i++)
    N[substr.charAt(i)] = i + 1;

let N2 = new Array(substr.length + 1);
for (let i = 0; i < N2.length; i++) {
    N2[i] = 0;
}
let f = new Array(substr.length + 1);
let j = substr.length + 1;
f[substr.length] = j;
for (let i = substr.length; i > 0; i--) {
    while (j <= substr.length && substr[i - 1] != substr[j - 1]) {
        if (N2[j] == 0)
            N2[j] = j - i;
        j = f[j];
    }
    j--;
    f[i - 1] = j;
}
let prefix = f[0];
for (j = 0; j <= substr.length; j++) {
    if (N2[j] == 0)
        N2[j] = prefix;
    if (j == prefix)
        prefix = f[prefix];
}

let result = new Array();
let i = 0;
let m = 0;
while (i <= str.length - substr.length) {
    for (m = substr.length - 1; m >= 0 && substr[m] == str[i + m]; m--) ;
    if (m < 0) {
        result.push(i);
        i += N2[m + 1];
    } else {
        let k = 0;
        if (N[str[i + m]]) {
            k = Math.max(m - N[str[i + m]], 1);
        } else {
            k = m;
        }
        i += Math.max(N2[m + 1], k);
    }
}

let answer = '';
if (result.length==0) {
    console.log("подстоки нет в строке")ж
} else {
    for (let i = 0; i < result.length; i++) {
        answer += result[i] + ' ';
    }
    console.log(answer);
}
