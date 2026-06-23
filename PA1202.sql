Create Database BrandsDB;
Use BrandsDB;

Create Table Brands(
BrandID INT,
BrandName VARCHAR(250),
BrandCategory VARCHAR(100),
CountryOfOrigin VARCHAR(50),
Quantity INT
);

desc Brands;