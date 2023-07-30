const Book = require("./Book");
const Author=require('../authors/Author');
const Publisher=require('../publishers/Publisher')
const { NotFoundError } = require("../../../../../mongo/src/shared/errors");

const addBook = async (data) => {

  const author=await Author.findOne({_id:data.author,is_deleted:false})

  if(!author){
    throw new NotFoundError('Author Not Found')
  }

  const publisher=await Publisher.findOne({_id:data.publisher,is_deleted:false})

  if(!publisher){
    throw new NotFoundError('Publisher Not Found')
  }

  const result = await Book.create({
    ...data,
  });

  return result;
};

module.exports = addBook;
