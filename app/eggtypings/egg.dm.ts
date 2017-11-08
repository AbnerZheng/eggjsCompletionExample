/**
 * Created by abnerzheng on 2017/11/7.
 */

import {IService, IController} from "egg";

import HomeController  from "../controller/home.js";
import NewsService  from "../service/news.js"

declare module "egg"{
    interface IService{
        news: NewsService;
    }

    interface IController{
        home: HomeController;
    }
}
