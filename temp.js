// jshint asi:true


function exec(func, arg) {
  func(arg)
}

exec((something) => {
  console.log(something)
}, 'Hello World')