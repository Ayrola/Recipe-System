export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desctription: string, imagePath: string)
    {
        this.name = name;
        this.description = desctription;
        this.imagePath = imagePath;
    }
}