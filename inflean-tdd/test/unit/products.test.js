const productController = require('../../controller/products');
const productModel = require('../../models/Product');
const httpMocks = require('node-mocks-http');
const newProduct = require('../data/new-product.json');

productModel.create = jest.fn();

//전역의 beforEach는 전역에 작동한다
let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
})


describe("Product Controller Create", () => {

    beforeEach(() => {
        req.body = newProduct;
    })
    it("should have a createProduct function", () => {
        expect(typeof productController.createProduct).toBe("function");
    }) 
    it("should call ProductModel.create", async () => {
        // productController.createProduct 호출될때 productModel.create가 사용되는지..
        // 종속성 제거를 위해 MOCK 함수 활용
        await productController.createProduct(req, res, next);
        expect(productModel.create).toBeCalled();
    })
    it("should return 201 response code", async () => {
        await productController.createProduct(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    })
    it("should return json body in response", async () => {
        productModel.create.mockReturnValue(newProduct);
        await productController.createProduct(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newProduct);
    })

    it("should handle errors", async () => {
        const errMessage = { message: "decription property missing" };
        const rejectPromise = Promise.reject( errMessage );
        productModel.create.mockReturnValue(rejectPromise);
        await productController.createProduct(req, res, next);
        expect(next).toBeCalledWith(errMessage);
    })
})

