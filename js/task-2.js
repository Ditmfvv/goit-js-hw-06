class Storage {
    // Конструктор приймає масив товарів і ініціалізує приватну властивість items
    constructor(initialItems) {
      this.#items = initialItems;
    }
  
    // Приватна властивість items
    #items;
  
    // Метод для отримання масиву товарів
    getItems() {
      return this.#items;
    }
  
    // Метод для додавання нового товару
    addItem(newItem) {
      this.#items.push(newItem);
    }
  
    // Метод для видалення товару
    removeItem(itemToRemove) {
      const index = this.#items.indexOf(itemToRemove);
      if (index !== -1) {
        this.#items.splice(index, 1);
      }
    }
  }
  
  // Перевірка роботи класу:
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  
  storage.removeItem("Scaner");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  