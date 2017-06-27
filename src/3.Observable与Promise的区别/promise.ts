let promise: Promise<number> =
    new Promise((resolve, reject) => {
        console.log(`生成开始！`);
        resolve(4);
    });

promise.then(i => {
    console.log(`消费开始！`)
    console.log(`then 1: ${i}`);
    console.log(i);
});


console.log('Done!');
