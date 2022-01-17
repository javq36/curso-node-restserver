const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlPArser: true,
      useUnifiedTopology: true,
      /* useCreateIndex: true,
      useFindAndModify: false, */
    });

    console.log('Base de datos Online');
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora iniciar la BD");
  }
};

module.exports = {
  dbConection,
};
