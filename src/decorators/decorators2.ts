function split(originalMethod: any, context: ClassMethodDecoratorContext) {
  function replacementMethod(this: any, ...args: any[]) {
    args[0] = args[0].split('');
    const result = originalMethod.call(this, ...args);
    return result;
  }
  return replacementMethod;
}

function reverse(originalMethod: any, context: ClassMethodDecoratorContext) {
  function replacementMethod(this: any, ...args: any[]) {
    args[0] = args[0].reverse();
    const result = originalMethod.call(this, ...args);
    return result;
  }
  return replacementMethod;
}

function join(originalMethod: any, context: ClassMethodDecoratorContext) {
  function replacementMethod(this: any, ...args: any[]) {
    args[0] = args[0].join('');
    const result = originalMethod.call(this, ...args);
    return result;
  }
  return replacementMethod;
}

class StringManager {
  //   @toUpperCase
  @split
  @reverse
  @join
  printString(str: string) {
    console.log('printString called', str);
  }
}

const stringManager = new StringManager();
stringManager.printString('hello');
