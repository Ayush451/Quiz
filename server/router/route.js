import { Router } from "express";
const router =Router();

// importing controllers
import * as controller from '../controllers/controller.js'

// // Questions Routes API
// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)

// chaining GET, POST, DELETE for same route
router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.insertQuestions)
    .delete(controller.dropQuestins)

router.route('/result')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.dropResult)

export default router