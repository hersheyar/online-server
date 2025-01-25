


const dummyData = [
    {
        "title": "EC2",
        "category": "Server",
        "price": 12.99,
        "image":'/img/ec2.png',
        "_id": "01"
    },
    {
        "title": "LAMBDA",
        "category": "Serverless",
        "price": 12.99,
        "image": '/img/lambda.png',
        "_id": "02"
    },
    {
        "title": "Elastic Load Balancer",
        "category": "Networking",
        "price": 12.99,
        "image": '/img/loadbalancer.png',
        "_id": "03"
    },
    {
        "title": "Cloud Front",
        "category": "Content Delivery",
        "price": 12.99,
        "image": '/img/cloudfront.png',
        "_id": "04"
    },
    {
        "title": "BOTO3",
        "category": "SDK/Tooling",
        "price": 12.99,
        "image": '/img/boto3.png',
        "_id": "05"
    }
];

const dummyCategories = ["Server", "Serverless", "Networking", "Content Delivery", "SDK/Tooling"]

class DataService {

    getProducts(){

        return dummyData;
    }

    getCategories(){

        return dummyCategories;
    }

}

export default new DataService();