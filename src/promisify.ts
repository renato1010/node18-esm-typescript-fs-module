/**
 * Conditions:
 * The callback got to be the last argument of the function
 * Ther error(if any) must be the firest argumento passed to callback
 * any return value is passed after the errorto the callback
 *
 */

function promisify(callbackBasedApi: Function) {
  return function promisified(...args: any[]) {
    return new Promise((resolve, reject) => {
      const newArgs = [
        ...args,
        function (err: Error, result: any) {
          if (err) {
            return reject(err);
          }
          resolve(result);
        },
      ];
      callbackBasedApi(...newArgs);
    });
  };
}

export { promisify };
