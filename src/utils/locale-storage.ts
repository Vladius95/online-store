// TODO переписать на прокси

export type Keys = "cart-goods";

/**
 * T - интерфейс объекта
 *  ключ в конструкторе работает с объектом
 * один экземпляр работает с одним объектов
 * ls key: T extends {}
 */
export class LocaleStorage<T> {
  constructor(private _key: Keys, private _initial: T) {
    this._initParams();
  }

  private _initParams() {
    const _storageValue = this.value;

    if (Object.keys(_storageValue).length === 0) {
      this.newValue = this._initial;
    }
  }

  get value(): T {
    return JSON.parse(localStorage.getItem(this._key) || "{}") as T;
  }

  set newValue(data: T) {
    localStorage.setItem(this._key, JSON.stringify(data));
  }

  changeKey(key: Keys) {
    this._key = key;

    this._initParams();
  }
}
