import React, { useState } from 'react';
import Form from './form'; // 'form' bileşenini içe aktarır.
import List from './list'; // 'list' bileşenini içe aktarır.

function Todo() {
  const [todos, setTodos] = useState([]); // Yapılacaklar listesi için bir durum değişkeni ve bu durumu güncellemek için bir işlev tanımlar.

  const addTodo = (addItem) => { // Yeni bir yapılacak öğesi eklemek için bir işlev tanımlar.
    if (addItem.title.trim() === '') { // Eğer girilen metin sadece boşluklardan oluşuyorsa işlem yapmadan işlemden çıkar.
      return;
    }
    setTodos([...todos, ...[addItem]]); // Yeni yapılacak öğesini 'todos' dizisine ekler.
  };

  return (
    <section className='main todoapp'>
      <header className='header'>
        <h1>todos</h1> {/* Sayfanın başlığını gösterir. */}
        <Form onAddTodo={addTodo} /> {/* Yeni yapılacak eklemek için bir form bileşenini görüntüler ve 'addTodo' işlevini iletebilir. */}
      </header>
      <List todos={todos} setTodos={setTodos} /> {/* Yapılacaklar listesini gösteren 'List' bileşenini görüntüler. */}
    </section>
  );
}

export default Todo; // 'Todo' bileşeni dışa aktarılır.
