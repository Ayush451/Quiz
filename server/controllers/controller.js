import Questions from "../models/questionsScheme.js";
import Results from "../models/resultScheme.js";
import questions,{answers} from "../database/data.js"

//get all questions
export async function  getQuestions(req,res){
    try {
       const q = await Questions.find();
       res.json(q);
    } catch (error) {
        res.json({error})
    }
}

//insert all questions
export async function insertQuestions(req,res){
    try {
        Questions.insertMany({questions : questions, answer : answers}, function(err,data){
            res.json({msg: "Data saved Successfully..."})
        })
    } catch (error) {
        res.json({error})
    }
}

//delete all questions
export async function dropQuestins(req,res){
   try {
      await Questions.deleteMany()
      res.json({msg: "Question deleted Sucessfully..."})
   } catch (error) {
    res.json({error})
   }
}

//get all result
export async function getResult(req,res){
    try {
        const r = await Results.find()
        res.json(r)
    } catch (error) {
        console.log({error})
    }
}

//post all result
export async function storeResult(req,res){
    try {
        const {username, result, attempts, points, achived} = req.body
        if(!username && !result) throw new Error('Data Not Provided...');
        Results.create({username, result, attempts, points, achived}, function (err,data){
            res.json({msg: "Result saved sucessfully..."})
        })
    } catch (error) {
        console.log({error})
    }
}

//delete all result
export async function dropResult(req,res){
    try {
        await Results.deleteMany();
        res.json({msg: "Result deleted Successfully..."})
    } catch (error) {
        res.json({error})
    }
}
