// Звичайно, я можу пояснити useState простішими словами для 12-річної дитини.
// Уявіть собі useState як чарівну скриньку, в яку ви можете класти речі і виймати їх.
//  Ви можете почати з порожньої скриньки, а потім додати до неї щось пізніше.
// У коді ви можете використовувати useState для створення змінної і функції, яка може зберігати і оновлювати значення змінної. Ось приклад:

import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count" and initialize it to 0
  const [count, setCount] = useState(0);

  // Function to increment the count by 1
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default Counter;

// У цьому прикладі ми створюємо простий компонент лічильника, який відображає значення лічильника і кнопку для його збільшення.
// Хук useState використовується для створення змінної стану під назвою count, яка ініціалізується 0. Ми також створюємо функцію setCount, 
// яка буде використовуватися для оновлення значення count.
// Коли користувач натискає кнопку, ми викликаємо функцію incrementCount, яка оновлює значення count на 1 за допомогою функції setCount.
// Таким чином, щоразу, коли змінна count оновлюється, React автоматично перерендерить компонент з новим значенням.