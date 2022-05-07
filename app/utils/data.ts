import Hasty from "hasty.db";
import { join } from "path";

const DB = new Hasty(join(__dirname, '../../austro.db'));
export const Tables = {
    users: DB.Table('users'),
    posts: DB.Table('posts'),
    sets: DB.Table('sets'),

    username_id_map: DB.Table('username_id_map'),
}