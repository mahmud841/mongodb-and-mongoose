const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/primaryDatabase").then(() => {
  console.log('Connected to MongoDb Succesfully');
  
}).catch(() => {
  console.log(err);
})


const student = mongoose.Schema ({
  name: String,
  workout:Boolean,
  height:Number,
})

const Student = mongoose.model("Student",student);

const adder = async () => {
  // const newNumber = new Student({
  //   name:"Mahmud",
  //   workout:true,
  //   height:6
  // })
  // await newNumber.save();

  // const ss = await Student.find()
  const ss = await Student.find({height:{$eq:6}})
    // name:"Mahmud Khan SuruJ",
    // workout:true,
    // height:7 })
    console.log(ss);
    
}

adder();