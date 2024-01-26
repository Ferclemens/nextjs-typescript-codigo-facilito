export type Image = {
    date? : string;
    explanation? : string;
    hdurl? : string;
    title? : string;
    url? : string;
}

export type NasaApodProps = {
    imageOfTheDay : Image;
    last10Images : Image[];
}