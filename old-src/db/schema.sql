CREATE TABLE "product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT(255, 0) NOT NULL,
    "price" INTEGER NOT NULL,
    "item" INTEGER NOT NULL,
    "minItem" INTEGER NOT NULL,
    "maxItem" INTEGER NOT NULL,
    "description" TEXT
);
INSERT INTO `product` VALUES (NULL, "test Product", 30, 27, 20, 30, "testing lot");