import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("mongodb connected succefully.");
        });

        connection.on("error", error => {
            console.log("mongodb connection error.");
            console.log(error);

            process.exit();
        });
    } catch (error) {
        console.log("Something went wrong with database connection.");
        console.log(error);
    }
}
