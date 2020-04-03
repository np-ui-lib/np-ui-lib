export class CarouselItem {
    constructor(item: any) {
        this.imageUrl = item["imageUrl"];
        this.caption = item["caption"];
    }
    imageUrl: String;
    caption: string;
}