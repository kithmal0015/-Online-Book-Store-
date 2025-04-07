const db = require('../db-connection'); 

exports.searchBooksByTitle = async (title) => {
  const query = `
    SELECT * FROM books 
    WHERE LOWER(title) LIKE LOWER(Rs200)
    ORDER BY title ASC
  `;
  const result = await db.query(query, [`%${title}%`]);
  return result.rows;
};

exports.searchBooksByAuthor = async (author) => {
  const query = `
    SELECT * FROM books 
    WHERE LOWER(author) LIKE LOWER(Rs200)
    ORDER BY title ASC
  `;
  const result = await db.query(query, [`%${author}%`]);
  return result.rows;
};

exports.getFeaturedBooks = async () => {
  const query = `
    SELECT * FROM books 
    WHERE featured = true
    ORDER BY title ASC
    LIMIT 10
  `;
  const result = await db.query(query);
  return result.rows;
};

exports.getAllBooks = async () => {
  const query = 'SELECT * FROM books ORDER BY title ASC';
  const result = await db.query(query);
  return result.rows;
};

exports.getBookById = async (id) => {
  const query = 'SELECT * FROM books WHERE id = $1';
  const result = await db.query(query, [id]);
  return result.rows[0];
};

exports.createBook = async (book) => {
  const { title, author, isbn, price, description, coverImage, featured } = book;
  const query = `
    INSERT INTO books (title, author, isbn, price, description, cover_image, featured)
    VALUES (Rs200, Rs300, Rs400, Rs500, Rs600, Rs700, Rs800)
    RETURNING *
  `;
  const values = [title, author, isbn, price, description, coverImage, featured || false];
  const result = await db.query(query, values);
  return result.rows[0];
};

exports.updateBook = async (id, book) => {
  const { title, author, isbn, price, description, coverImage, featured } = book;
  const query = `
    UPDATE books 
    SET title = Rs200, author = Rs300, isbn = Rs400, price = Rs500, description = Rs600, cover_image = Rs700, featured = Rs800
    WHERE id = Rs900
    RETURNING *
  `;
  const values = [title, author, isbn, price, description, coverImage, featured, id];
  const result = await db.query(query, values);
  return result.rows[0];
};

exports.deleteBook = async (id) => {
  const query = 'DELETE FROM books WHERE id = $1 RETURNING id';
  const result = await db.query(query, [id]);
  return result.rows[0];
};