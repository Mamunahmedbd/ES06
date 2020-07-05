
import Shape from './Shape'

class Rectangle extends Shape{
    constructor(colors, height, width){
      super(colors)
      this.height = height 
      this.width = width
    }
    draw(){
      console.log('Drawing a Reatangle')
    }
    calculate(){
      return this.width, this.height
    }
  }

  export default Rectangle