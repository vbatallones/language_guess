const langs = require('langs')
const colors = require('colors')
const franc = require('franc')
const args = process.argv[2]
const input = franc.all(args)
const langsInput = langs.where("3", input[0][0])

if (input[0][0] === 'und') {
    console.log('❌ Sorry no language found. Try with more sample text ❌'.red)
} else {
    console.log(`The language was ${langsInput.name.green}`)
}



// 'magandang umaga sa lahat'
// 'Alle menneske er fødde til fridom'
// 'এটি একটি ভাষা একক IBM স্ক্রিপ্ট'
// 'Alle menslike wesens word vry'
// 좋은 아침 내 사랑
