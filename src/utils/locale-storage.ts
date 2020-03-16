// TODO переписать на прокси

export type Keys = "cart-goods" | "user";

/**
 * T - интерфейс объекта
 *  ключ в конструкторе работает с объектом
 * один экземпляр работает с одним объектов
 * ls key: T extends {}
 */
export class LocaleStorage<T> {
  constructor(private _key: Keys) {}

  get value(): T | null {
    const data = localStorage.getItem(this._key);
    return data ? JSON.parse(data) : null;
  }

  set newValue(data: T) {
    localStorage.setItem(this._key, JSON.stringify(data));
  }

  changeKey(key: Keys) {
    this._key = key;
  }

  static clearValue(key: Keys) {
    localStorage.setItem(key, null);
  }
}
