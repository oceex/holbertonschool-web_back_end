const weakMap = new WeakMap();

export default function queryAPI(endpoint){
    const current = weakMap.get(endpoint) || 0;
    const newCount = current + 1;

    if (newCount >= 5)
        throw new Error('Endpoint load is high');

    weakMap.set(endpoint, newCount);
}
