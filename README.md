# NodeJs-Assignment
In order to run and test this API you need to follow my instructions carefully,
Steps:
1 : After installing or cloning this Git repository you need to open this file in your favorite Code editor,
2 :  Now after opening the code editor open youe terminal and hit command [cd server].
3 : After entering into the file hit command [npm install] this will gonna install all the neccessary dependencies that we need to run this API.
5 : NOw start the server by hitting the command [npm start], Now you will see Server is running on Port 5000 & connected with database successfully.
6 : Now your are ready to test the API , for that you need to open [POSTMAN OR THUNDER CLIENT] and hit this url[http://localhost:5000/item] inside the url field.
7 : NOw for adding new product into your database you will pass [/new_Item] at the end of the url and then will gonna select the body inside POSTMAN and then Application/JSON format and then select the [POST] from methods.
8 : Here is the sample data for Post route { "category" : "Health", "product_name" : "Dolo 650mg", "image" : "image_url", "price" : 20 , "description" : "Tablet for fever" , "quantity" :10, "units_in_stock" :500,"available" :true}
9 : If you want to get all products from Database ENTER [all_items] at the end of your url and then select get method and hit SEND.
10 : If you want to get a particular product from Database ENTER [ID OF THAT PRODUCT] at the end of your url and then select get method and hit SEND.
11 : If you want to delete a particular product from Database ENTER [ID OF THAT PRODUCT] at the end of your url and then select delete method and hit SEND.
12 : If you want to Update a particular product  ENTER [ID OF THAT PRODUCT] at the end of your url and then select put method and then Follow step no 8 , but this time You will do some changes in your product and the method will also be different .
