const Book = require("../books/Book");
const Borrower = require("../borrowers/Borrower");
const Admin = require("../admins/Admin");
const Loan = require("./Loan");
const { NotFoundError } = require("../../../../../mongo/src/shared/errors");

const addLoan = async (data) => {
  const borrower = await Borrower.findOne({
    _id: data.borrower,
    is_deleted: false,
  });

  if (!borrower) {
    throw new NotFoundError("Borrower Not Found");
  }
  
   const listLoan=await Loan.find({borrower:data.borrower,returned_date:null});

   if(listLoan){
    if(listLoan.length==10){
      throw new Error('Olib qaytarilmagan kitoblar soni 10taga teng avval kitoblarni qaytaring ')
    }
   }

  const book = await Book.findOne({ _id: data.book, is_deleted: false });

  if (!book) {
    throw new NotFoundError("Book Not Found");
  }

  if (book.copies == book.number_of_leased) {
    throw new Error("Bunday kitob nusxasi tugagan");
  }

  const bookChange = await Book.findByIdAndUpdate(
    data.book,
    { number_of_leased: book.number_of_leased + 1 },
    { new: true }
  ).select("-is_deleted");

  

  const admin = await Admin.findOne({ _id: data.admin, is_deleted: false });

  if (!admin) {
    throw new NotFoundError("Admin Not Found");
  }

  const out_date = new Date();

  const due_date = new Date(data.due_date);
  const millesekud = due_date.getTime();

  const diffInMonths =
    (due_date.getFullYear() - out_date.getFullYear()) * 12 +
    (due_date.getMonth() - out_date.getMonth());

  if (
    diffInMonths > 2 ||
    (diffInMonths == 2 && due_date.getDate() - out_date.getDate() > 0)
  ) {
    throw new Error("Due_date 2oydan ortiq mumkin emas");
  }

  const result = await Loan.create({ out_date, ...data, due_date: millesekud });

  return result;
};

module.exports = addLoan;
