function update( num ) {
  document.querySelector('input').value = num;
  }

function number( num ){
    document.querySelector('input').value += num;
}

function cal() {
  const calc = document.querySelector( 'input' ).value
  const total = new Function( 'return ' + calc )
  update(total().toString())
}