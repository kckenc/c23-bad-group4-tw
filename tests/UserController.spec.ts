
import type { Request, Response } from "express";
import { UserController } from "../controller/UserController";
import { UserService } from "../service/UserService";
// import { getMockRequest, getMockResponse } from "./utils";

jest.mock("../service/UserService");


describe("UserController Test Case", () => {
    let controller: UserController;
    let service: UserService; 
    let req: Request;
    let res: Response;

    beforeEach(() => {
        service = new UserService({} as any);
        service.checkLogin = jest.fn(() => 
        Promise.resolve({id: 1, username: "ken", password: "1234"})
        );
        
        req = {
            params: {},
            query: {},
            body: {},
            session: {},
        } as Request;
   
        res = {
            status: () => jest.fn(() => res), 
            json: jest.fn(),
        } as any as Response;
      
        controller = new UserController(service);
      });
    
      it("Login should be success", async() => {
        const inputUsername = "ken";
        const inputPassword = "1234";
        req.body = {username: inputUsername, password: inputPassword};
        
        await controller.login(req, res);

        expect(service.checkLogin).toBeCalledWith(inputUsername, inputPassword);
        expect(req.session["user"]).toEqual({ id: 1 });
        expect(res.json).lastCalledWith({message: "success"});
        expect(res.json).toBeCalledTimes(1); 
      });

      it("Login should be fail - Invail username / password", async () => {
        const inputUsername = undefined;
        const inputPassword = "1234";
        req.body = {username: inputUsername, password: inputPassword};

        await controller.login(req, res);

        expect(service.checkLogin).not.toBeCalled();
        expect(res.status).toBeCalledWith(400);
        expect(res.json).lastCalledWith({ message: "invalid username or password" });
        expect(res.json).toBeCalledTimes(1); 
      });
});
