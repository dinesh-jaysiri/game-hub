import {Platform} from "./platform";
import {Genre} from "./genre";
import {Publisher} from "./publisher";

export interface Game {
    id: number;
    name: string;
    slug: string;
    publishers:Publisher[];
    genres:Genre[];
    description_raw: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[];
    rating_top: number;
}