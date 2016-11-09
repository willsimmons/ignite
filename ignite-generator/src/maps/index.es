#! /usr/bin/env node
'use strict'
import Generators from 'yeoman-generator'

class MapsGenerator extends Generators.Base {

  // Add node module in npm (locked to 0.11.0)
  // react-native link
  // Check if the user has a Usage Examples screen
  // YES? add button and example
  //


  // constructor (args, options) {
  //   super(args, options)
  //   // this.argument('name', { type: String, required: true })
  // }

  generateApp () {
    // console.log('HALOOOOOOOOOO')
  }

  end () {
    console.log('Time to get cooking! 🍽 ')
  }
}

module.exports = MapsGenerator
