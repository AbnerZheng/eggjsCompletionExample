/**
 * Created by abnerzheng on 2017/11/7.
 */

import {IService, IController} from "egg";

import {HomeController} from "./home";
import {NewsService} from "../service/news"

declare module "egg"{
    interface IService{
        news: NewsService;
    }

    interface IController{
        home: HomeController;
    }
}
