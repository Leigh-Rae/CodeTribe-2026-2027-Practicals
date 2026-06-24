Create Database BrandsDB;
Use BrandsDB;

Create Table Brands(
BrandID INT,
BrandName VARCHAR(250),
BrandCategory VARCHAR(100),
CountryOfOrigin VARCHAR(50),
Quantity INT
);

Show Tables;
 
 Insert into Brands 
 Values
 ( 004, "Tier-Tier", "makeup", "Korea" , 50),
 (002, "Adidas", "Clothes","USA", 10),
 (003, "Nivea", "Skincare", "Australia", 34);
 
 desc Brands;
 
 select *from Brands
 WHERE quantity>20
 AND BrandName = "Tier-Tier";
 
 select *from Brands
 ORDER BY BrandID desc
 LIMIT 10;