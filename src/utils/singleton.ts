// Singleton
export class Singleton {
  private static _instance: Singleton;

  constructor() {
    if (Singleton._instance) {
      throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new");
    } else {
      Singleton._instance = this;
    }
  }

  static getInstance(): Singleton {
    if (!Singleton._instance) {
      this._instance = new this();
    }
    // this._instance.load();
    return this._instance;
  }

  // load(...any) {}
}
