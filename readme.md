# loyiha_2 uchun qo'shimchalar

## Tizimning funksional qo'shimchalari:

-Loan post bo'layotganida bookning nusxalarini tekshirish 

-Bookda number_of_leased ya'ni ushbu kitob nechta kishiga berilganligini aniqlab turadi default nolga teng

-Loanda returned_date ya'ni ushbu kitobning qaytgan vaqtini aniqlaydi default null teng


```

Parametrlar:

- `q`: buyumlarni qidirish
- `sort`: sort obyekti(by,order)
- `filter`: filter obyekti



## Login qilish uchun api

```
POST /admins/login
```

HTTP 200

```json
{
   "username": "iroda3242",
   "password": "1234"
}


```
## Kitobni qaytarish uchun api

```
PATCH /loads/:id
```



## seedlarni qo'shish uchun

const seedDB = async () => {

  await Admin.insertMany(seedAdmins);

  await Borrower.insertMany(seedBorrowers);

  await Publisher.insertMany(seedPublishers);

  await Author.insertMany(seedAuthors);

  // await Book.insertMany(seedBooks);//kerakli idlar bilan bookseedini tahrirlang
  

};

seedDB().then(() => {
  mongoose.connection.close();
});

ni 
sr/db/index.js filening oxiriga etib qo'yish kk .Keyin olib tashlash kk .

keyin Book uchun seed alohida 'await Book.insertMany(seedBooks)(kerakli idlar bilan bookseedini tahrirlang)' yuqoridagi usulda qo'shish kk.

Keyin yana olibtashlash kk.Yoki book un seed kerak emas.

Seedlarni ishlata olganim shu boshqa yo'lda qila olmadim.!
