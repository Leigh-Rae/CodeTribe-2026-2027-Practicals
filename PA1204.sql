Create Database ClothesDB;
Use BrandsDB;

Create Table Clothes(
ClothingID INT,
BrandName VARCHAR(250),
ClothingCategory VARCHAR(100),
ClothingType VARCHAR(50),
Quantity INT
);

desc Clothes;
SELECT * FROM Clothes
