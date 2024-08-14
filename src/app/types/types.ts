export interface Category {
    id: string;
    name: string;
  }
  
  export interface Book {
    id: string;
    title: string;
    author: string;
    available: boolean;
    status: string;
    categoryId: string;
    category: Category;
  }
  
  export interface User {
    id: string;
    email: string;
    fullName: string;
    location: string;
    phoneNumber: string;
    password: string;
    role: string;
    isActive: boolean;
    wallet: number;
  }
  
  export interface BookItem {
    id: string;
    userId: string;
    bookId: string;
    quantity: number;
    price: number;
    book: Book;
    user: User;
  }
  
  export interface BookResponse {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    books: BookItem[];
  }
  