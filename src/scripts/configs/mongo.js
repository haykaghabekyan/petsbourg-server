export const MONGO_CONFIGS = () => {
    let uri = 'mongodb://localhost:27017/petsbourg';
    if (process.env.MONGODB_URI) {
        uri = process.env.MONGODB_URI;
    }
    return {
        uri,
    };
};
