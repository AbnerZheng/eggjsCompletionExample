/**
 * Created by abnerzheng on 2017/11/7.
 */

import {Controller} from "egg";

export class HomeController extends Controller {
    index():Promise<void>;

    test(a:number, b:number):number;
}