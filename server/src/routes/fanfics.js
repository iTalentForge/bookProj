const { Router } = require('express');
const Fanfic = require('../models/fanfic');
const router = Router();

router.get('/', async (req, res) => {
    const fanfics = await Fanfic.find()
    .populate('userId', 'email name')
    .select('img title price');

    console.log(fanfics);

    res.render('fanfics', {
        title: 'Fanfics',
        isFanfics: true,
        fanfics
    });
});

router.get('/:id/edit', async (req, res) => {
    if (!req.query.allow) return res.redirect('/');

    const fanfic = await Fanfic.findById(req.params.id);

    res.render('fanfic-edit', {
        title: `Edit: ${fanfic.title}`,
        fanfic
    });
});

router.post('/edit', async (req, res) => {
    const { id } = req.body;
    delete req.body.id;
    await Fanfic.findByIdAndUpdate(id, req.body);
    res.redirect('/fanfics');
});

router.post('/remove', async (req, res) => {
    try {
        await Fanfic.deleteOne({ _id: req.body.id });
        res.redirect('/fanfics');
    } catch (err) {
        console.log(err);
    }
})

router.get('/:id', async (req, res) => {
    const fanfic = await Fanfic.findById(req.params.id);
    res.render('fanfic', {
        layout: 'empty',
        title: `Fanfic: ${fanfic.title}`,
        fanfic
    });
})

module.exports = router;