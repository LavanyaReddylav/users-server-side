import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express-serve-static-core';

const router = require('express-promise-router')()
const User = require('../model/user')


router.get('/', async (req: Request, res: Response, next: NextFunction) => {

    var query: any = {}

    var users = await User.find(query)
    return res.status(200).json({ success: true, message: 'getting users', users })
})

router.post('/add', async (req: Request, res: Response, next: NextFunction) => {

    const {
        login, node_id, id, avatar_url, gravatar_id, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url,
        events_url,
        received_events_url,
        type,
        site_admin } = req.body;
    const foundUser = await User.findOne({ login })
    if (foundUser) {
        return res.status(406).json({ success: false, message: 'users already exists with login' })
    }
    const new_user = new User({
        login, node_id, id, avatar_url, gravatar_id, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url,
        events_url,
        received_events_url,
        type,
        site_admin
    })

    const users = await new_user.save()

    return res.status(200).json({ success: true, message: 'new users added successfully', users })
})


router.put('/update', async (req: Request, res: Response, next: NextFunction) => {



    const {
        login, node_id, id, avatar_url, gravatar_id, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url,
        events_url,
        received_events_url,
        type,
        site_admin } = req.body;

    const update_user = await User.findOneAndUpdate({ _id: req.body._id }, {
        login, node_id, id, avatar_url, gravatar_id, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url,
        events_url,
        received_events_url,
        type,
        site_admin
    })

    const result = await update_user.save();

    return res.status(200).json({ success: true, message: ' users Updated successfully', result })
})

router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {


    const { id } = req.params;
    console.log(req.params)
    const result = await User.findOneAndDelete({ _id: id });
    return res.status(200).json({ success: true, message: ' users deleted successfully', result })
})

module.exports = router;