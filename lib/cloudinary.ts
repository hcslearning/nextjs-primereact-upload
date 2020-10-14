export default class Cloudinary {
    static getAbsoluteUrl(resource) {
        //https://res.cloudinary.com/demo/image/upload/w_70,h_90,c_fit/flower.jpg
        return `https://res.cloudinary.com/lakis-cl/image/upload/w_410,h_390,c_fill/${resource}`
        //return `https://res.cloudinary.com/obsequia-cl/image/upload/${resource}`
    }
}