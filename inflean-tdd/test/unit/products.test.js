const productController = require('../../controller/products');
const productModel = require('../../models/Product');

productModel.create = jest.fn();

describe("Product Controller Create", () => {
    it("should have a createProduct function", () => {
        expect(typeof productController.createProduct).toBe("function");
    }) 
    it("should call ProductModel.create", () => {
        // productController.createProduct 호출될때 productModel.create가 사용되는지..
        // 종속성 제거를 위해 MOCK 함수 활용
        productController.createProduct();
        expect(productModel.create).toBeCalled();
    })
})

