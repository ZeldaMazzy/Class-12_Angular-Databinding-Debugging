export class Book {
    constructor(
        public title: string,
        public author: string,
        public genre?: string,
        public coverImgPath?: string,
        public price?: number,
        public firstPublishYear?: number,
        public isbn?: string
    ) {}
}