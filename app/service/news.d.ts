/**
 * Created by abnerzheng on 2017/11/7.
 */

import {Service} from "egg";

export class NewsService extends Service{
    list(page: number):Promise<any>
}