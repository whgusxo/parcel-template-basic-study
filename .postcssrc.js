//import autopredfixer form 'autoprefixer'
//const autoprefixer = require('autoprefixer')

//export
// module.exports={
//   plugin: [
//     autoprefixer
//   ]
// }

// 위의 코드를 더 간결하게 작성 가능

module.exports= {
  plugins: [
    require('autoprefixer')
  ]
}