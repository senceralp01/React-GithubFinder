import React from "react";

// Context yapısını büyük uygulamalarda componentler arasındaki props geçişleri zor olacağı için kullanmaktayız.

// Kapsayıcı yani conteiner bir sanal elamanı bu şekilde oluşturuyoruz.

const NotesContext = React.createContext()

export default NotesContext

// Oluşturulan bu context bağlamında, ana component'imiz olan NoteApp içerisinde NotesContext.Provider kapsayıcısını oluşturduk. Bu provider'a value olarak ana komponent içerisinde ulaşabildiğimiz ilgili parametreleri gönderdik.

// Böylelikle NotesContext.Provider içerisinde tanımlanan bütün componentler value ile gönderilen tüm parametrelere ulaşabilir. Ulaşması için de ilgili context import edilir ve useContext fonksiyonu kullanılır. 