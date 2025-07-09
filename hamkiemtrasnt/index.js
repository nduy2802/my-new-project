function isPrime(n) {
    if (n < 2)
        return false;
    for ( let i = 2 ; i <= Math.sqrt(n) ; i++ ){
        if (n % i === 0)
            return false;
    }
    return true;
}
for (let i = 2; i < 10000; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}