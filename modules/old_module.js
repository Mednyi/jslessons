!(function myModule () {
    let k = 0;
    let l = 0;
    console.log(l);
    const subtract = (a,b) => a-b;
    window.myModule = {
        k,
        subtract
    }
})();
