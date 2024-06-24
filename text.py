import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="", 
    database="library"
)

def main():
    while True:
        print("1. Add Book\n2. Take Book\n3. Submit Book\n4. Exit")
        n = input("Enter a number: ")
        if n == '1':
            books()
        elif n == '2':
            take_book()
        elif n == '3':
            submit_book()
        elif n == '4':
            print("Exiting...")
            break
        else:
            print("Wrong choice. Please enter a valid number.")

def books():
    bname = input("Enter book name: ")
    bookid = int(input("Enter book id: "))
    tbooks = int(input("Enter total number of books: "))
    subject = input("Enter subject: ")
    sql = "INSERT INTO books (bname, bookid, tbooks, subject) VALUES (%s, %s, %s, %s)"
    val = (bname, bookid, tbooks, subject)
    mycursor = mydb.cursor()
    mycursor.execute(sql, val)
    mydb.commit()
    print("Record inserted successfully")

def take_book():
    uname = input("Enter username: ")
    uid = int(input("Enter user id: "))
    bookid = int(input("Enter book id: "))
    date = input("Enter book taken date (YYYY-MM-DD): ")
    sql = "INSERT INTO take_book (uname, uid, bookid, date) VALUES (%s, %s, %s, %s)"
    val = (uname, uid, bookid, date)
    mycursor = mydb.cursor()
    mycursor.execute(sql, val)
    mydb.commit()
    print(f"Book taken by {uname}")
    bookup(bookid, -1)

def submit_book():
    uname = input("Enter username: ")
    uid = int(input("Enter user id: "))
    bookid = int(input("Enter book id: "))
    date = input("Enter book return date (YYYY-MM-DD): ")
    sql = "DELETE FROM take_book WHERE uname = %s AND uid = %s AND bookid = %s AND date = %s"
    val = (uname, uid, bookid, date)
    mycursor = mydb.cursor()
    mycursor.execute(sql, val)
    mydb.commit()
    print(f"Book submitted by {uname}")
    bookup(bookid, 1)

def bookup(bookid, u):
    sql_select = "SELECT tbooks FROM books WHERE bookid = %s"
    val_select = (bookid,)
    mycursor = mydb.cursor()
    mycursor.execute(sql_select, val_select)
    myresult = mycursor.fetchone()
    if myresult:
        current_tbooks = myresult[0]
        new_tbooks = current_tbooks + u
        sql_update = "UPDATE books SET tbooks = %s WHERE bookid = %s"
        val_update = (new_tbooks, bookid)
        mycursor.execute(sql_update, val_update)
        mydb.commit()

if __name__ == "__main__":
    main()
