import React from 'react';

function List({ todos, setTodos }) {


  return (
    <div>
      <ul className="todo-list">

        {todos.map((item, i) => ( // 'todos' dizisini haritalayarak her bir yapılacak öğesini görüntüler.
          <li key={i} className={item.completed ? "completed" : ""}> {/* Her öğe için bir liste öğesi oluşturur.*/}
            <div className="view">
              <input className='toggle' type="checkbox" checked={item.isDone} onChange={() => {

                // Checkbox öğesi oluşturuluyor ve başlangıç durumu `item.isDone` değişkenine bağlı olarak ayarlanıyor.

                setTodos(
                  todos.map((x, y) => {
                    return {
                      ...x, // Önceki öğenin tüm özelliklerini korur.
                      isDone: i === y ? !x.isDone : x.isDone
                      // Eğer şu anki indeks (y) değişkeni, tıklanan checkbox'ın indeksi (i) ile aynıysa, mevcut "isDone" durumunu ters çevirir.
                      // Değilse, "isDone" durumunu değiştirmeksizin mevcut değeri korur.
                    }
                  })
                )
                

                  // Kullanıcı checkbox'u değiştirdiğinde çalışacak olan işlev başlıyor.

              }} /> {/* Bir onay kutusu ekler. */}
              <label style={{textDecoration: item.isDone ?  "line-through" : ""}}>{item.title}</label> {/* Yapılacak öğesinin metnini görüntüler. */}
              <button className="destroy" onClick={() => setTodos(todos.filter((x,y) => y !== i))}></button> {/*  Bir silme düğmesi ekler. */}
            </div>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default List; {/* 'List' bileşeni dışa aktarılır. */}
