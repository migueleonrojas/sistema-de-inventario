export class ArrayUtil {

  static noDuplicatesArrayObjects(array: any[], key:string): any[] {
    return array.filter((obj, index) => {
      return index === array.findIndex(o => obj[key] === o[key]);
    });
  }
  
}