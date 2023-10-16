import React, { useState } from 'react';

function Form({ onAddTodo }) {

  const [inputValue, setInputValue] = useState(''); // Girdi değerini ve bu değeri güncellemek için bir durum değişkeni tanımlar.

  const handleInputChange = (e) => { // Girdi değişikliklerini takip eden bir işlev tanımlar.
    setInputValue(e.target.value); // Girdi değişikliklerini 'inputValue' durumunu güncelleyerek takip eder.
  };

  const handleSubmit = (e) => { // Form gönderildiğinde gerçekleşecek işlevi tanımlar.
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engeller.
    onAddTodo({
      title: inputValue,isDone: false}); // 'onAddTodo' adlı bir işleme, girdi değerini ileterek yeni bir yapılacak öğesi ekler.
    setInputValue(''); // Girdi değerini temizler, böylece yeni girdiye hazır hale getirilir.
  };


  
  return (
    <form onSubmit={handleSubmit}> {/* Form gönderildiğinde 'handleSubmit' işlevini çağırır. */}
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus // Sayfa yüklendiğinde bu girdiye odaklanır.
        value={inputValue} // Girdi değerini 'inputValue' durumuna bağlar.
        onChange={handleInputChange} // Girdi değerindeki değişiklikleri yakalamak için 'handleInputChange' işlemini çağırır.
      />
    </form>
  );
}

export default Form; // 'Form' bileşenini dışa aktarır.
