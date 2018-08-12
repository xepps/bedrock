# Bedrock

Ignore the name - this is my submission for my bookinggo technical assessment.

## To run:

```
$ npm install
$ npm start
```

Visit http://localhost:3000/ in the browser

## To test:

```
$ npm install
$ npm test
```

## Author's thoughts

It was really difficult not to do more than was asked!

I used a forked version of `react-create-app` to get going, then stripped a bunch of stuff out (like dockerisation, 
heroku stuff, express server etc), so I've just got a core experience, although I did leave react router in there.

I developed this codebase using tdd (100% unit coverage!), with travis set up as my CI. I use branches/PRs to validate everything before I
merge my code into master. I have also got eslint + prettier running to keep my code clean.

Finally, I have run `npm audit fix` to ensure that any packages tagged as vunerable have been fixed!

Thank you for your consideration.