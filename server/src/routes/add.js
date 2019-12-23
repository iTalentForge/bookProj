import { Router } from 'express';
import Fanfic from '../models/fanfic';
const router = Router();

router.get('/', (req, res) => {
    res.render('', {
        title: 'Add fanfic',
        isAdd: true
    });
});

router.post('/', async (req, res) => {
    const fanfic = new Fanfic({
        title: req.body.title,
        fanficText: req.body.fanficText,
        img: req.body.img,
        userId: req.user
    });

    try {
        await fanfic.save()
        res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
    }
});

export default router;