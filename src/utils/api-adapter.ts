class APIAdapter {
  static transform(obj: any) {
    const newObj: any = Array.isArray(obj) ? [] : {};
    Object.entries(obj).forEach(([key, val]) => {
      const newKey: string = key
        .split('_')
        .reduce(
          (prev, curr) => prev + curr[0].toLocaleUpperCase() + curr.slice(1)
        );
      if (typeof val === 'object') {
        newObj[newKey] = this.transform(val);
      } else {
        newObj[newKey] = val;
      }
    });
    return newObj;
  }

  static fromAPI(data: any) {
    return APIAdapter.transform(data);
  }
}

export default APIAdapter;
