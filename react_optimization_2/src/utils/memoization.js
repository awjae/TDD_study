//메모이제이션은 메모리가 많이 든다
// input 값이 매번 달라지는 로직 ? x // 반복적으로 동일한 input, 로직이 무거운 함수에 효율
// 첫 input 에서는 결국 해당 로직을 사용
function memoize(fn) {

    const cache = {};

    return function (...args) {

        //방어 코드
        if (args.length !== 1) {
            return fn(...args)
        }

        if (cache.hasOwnProperty(args)) {
            return cache[args];
        }
        
        const result = fn(...args);
        cache[args] = result;

        return fn(...args)
    }
}
